import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { to_id } = useParams(); // Receiver ID from URL
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    const token = localStorage.getItem("dost_token");
    const userId = decodedUserId(token);

    if (!token || !userId) return <p>⚠️ Not authenticated</p>;

    const fetchMessages = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/messages/getAllMessages/${to_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            if (Array.isArray(data)) {
                setMessages(data);
            } else {
                console.warn("⚠️ Unexpected messages format:", data);
            }
        } catch (err) {
            console.error("❌ Error fetching messages", err);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        fetchMessages();

        socketRef.current = new WebSocket('ws://localhost:5000');

        socketRef.current.onopen = () => {
            console.log("✅ WebSocket connected");
        };

        socketRef.current.onerror = (err) => {
            console.error("❌ WebSocket error:", err);
        };

        socketRef.current.onmessage = (event) => {
            try {
                const { input, toId, fromId } = JSON.parse(event.data);

                // Only add if the message is FROM the other user TO me
                if (
                    Number(fromId) !== Number(userId) && (
                        Number(toId) === Number(userId) ||
                        Number(toId) === Number(to_id) // optional, for group chat-ish edge case
                    )
                ) {
                    setMessages((prev) => [...prev, { fromId, toId, content: input }]);
                    scrollToBottom();
                }
            } catch (err) {
                console.warn("⚠️ Invalid WebSocket message", event.data);
            }
        };


        return () => {
            socketRef.current?.close();
            console.log("🔌 WebSocket closed");
        };
    }, [to_id]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const msg = {
            input,
            token,
            to_id
        };

        try {
            socketRef.current?.send(JSON.stringify(msg));
            setMessages(prev => [...prev, { fromId: userId, toId: to_id, content: input }]);
            setInput('');
            scrollToBottom();
        } catch (err) {
            console.error("❌ Failed to send message", err);
        }
    };

    return (
        <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2>💬 Chat with User {to_id}</h2>
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                height: '400px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            alignSelf: msg.fromId === userId ? 'flex-end' : 'flex-start',
                            background: msg.fromId === userId ? '#dcf8c6' : '#eee',
                            margin: '5px',
                            padding: '8px 12px',
                            borderRadius: '10px',
                            maxWidth: '70%'
                        }}
                    >
                        {msg.content}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div style={{ marginTop: '1rem' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    style={{ width: '80%', padding: '0.5rem' }}
                />
                <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>Send</button>
            </div>
        </div>
    );
};

// Helper to decode JWT and extract userId
function decodedUserId(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.userId || payload.id || payload.sub;
    } catch (err) {
        console.error("❌ Failed to decode token", err);
        return null;
    }
}

export default Chat;
