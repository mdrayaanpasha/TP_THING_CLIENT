import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { to_id } = useParams(); // Receiver ID
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    const token = localStorage.getItem("dost_token");

    if (!token) return <p>⚠️ Not authenticated</p>;

    const fetchMessages = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/messages/getAllMessages/${to_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            setMessages(data);
        } catch (err) {
            console.error("Error fetching messages", err);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        fetchMessages();

        // WebSocket connection
        socketRef.current = new WebSocket('ws://localhost:5000');

        socketRef.current.onmessage = (event) => {
            try {
                const { input, toId, fromId } = JSON.parse(event.data);

                if (
                    Number(toId) === Number(to_id) ||
                    Number(fromId) === Number(to_id)
                ) {
                    setMessages((prev) => [...prev, { fromId, toId, content: input }]);
                    scrollToBottom();
                }
            } catch (err) {
                console.warn("Invalid message", event.data);
            }
        };


    }, [to_id]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const msg = {
            input,
            token,
            to_id
        };

        socketRef.current?.send(JSON.stringify(msg));
        setMessages(prev => [...prev, { fromId: 'me', toId: to_id, content: input }]);
        setInput('');
        scrollToBottom();
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
                            alignSelf: msg.fromId === 'me' || msg.fromId === decodedUserId(token)
                                ? 'flex-end'
                                : 'flex-start',
                            background: msg.fromId === 'me' || msg.fromId === decodedUserId(token)
                                ? '#dcf8c6'
                                : '#eee',
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

// helper function to extract userId from token
function decodedUserId(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.userId;
    } catch {
        return null;
    }
}

export default Chat;
