import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

// Helper to decode JWT and extract userId
// This function should ideally be in a separate utility file or context for better architecture,
// but kept here as per the original code structure.
function decodedUserId(token) {
    try {
        // Check if token is valid before decoding
        if (!token) return null;
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.userId || payload.id || payload.sub;
    } catch (err) {
        console.error("❌ Failed to decode token:", err);
        return null;
    }
}

export default function App() {
    const { to_id } = useParams(); // Receiver ID from URL
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading of messages

    // Get token and decode userId on component mount
    useEffect(() => {
        const token = localStorage.getItem("dost_token");
        const id = decodedUserId(token);
        if (token && id) {
            setIsAuthenticated(true);
            setUserId(id);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false); // Authentication check is done
    }, []);

    // Function to scroll to the bottom of the messages container
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Fetch messages and set up WebSocket connection
    useEffect(() => {
        if (!isAuthenticated || !userId) return; // Only proceed if authenticated

        const fetchMessages = async () => {
            try {
                const token = localStorage.getItem("dost_token"); // Re-fetch token to ensure it's fresh
                const res = await fetch(`https://apidost.vercel.app/api/messages/getAllMessages/${to_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await res.json();
                if (Array.isArray(data)) {
                    setMessages(data);
                } else {
                    console.warn("⚠️ Unexpected messages format:", data);
                    setMessages([]); // Ensure messages is an array even if API returns unexpected data
                }
                scrollToBottom(); // Scroll to bottom after fetching initial messages
            } catch (err) {
                console.error("❌ Error fetching messages:", err);
            }
        };

        fetchMessages();

        // WebSocket setup
        socketRef.current = new WebSocket('ws://localhost:5000');

        socketRef.current.onopen = () => {
            console.log("✅ WebSocket connected");
        };

        socketRef.current.onerror = (err) => {
            console.error("❌ WebSocket error:", err);
        };

        socketRef.current.onmessage = (event) => {
            try {
                const { input: receivedInput, toId, fromId } = JSON.parse(event.data);

                // Original logic: Only add if the message is FROM the other user TO me
                if (
                    Number(fromId) !== Number(userId) && (
                        Number(toId) === Number(userId) ||
                        Number(toId) === Number(to_id) // optional, for group chat-ish edge case
                    )
                ) {
                    setMessages((prev) => [...prev, { fromId, toId, content: receivedInput }]);
                    scrollToBottom();
                }
            } catch (err) {
                console.warn("⚠️ Invalid WebSocket message:", event.data);
            }
        };

        // Clean up WebSocket on component unmount or dependency change
        return () => {
            socketRef.current?.close();
            console.log("🔌 WebSocket closed");
        };
    }, [to_id, isAuthenticated, userId]); // Depend on to_id, isAuthenticated, and userId

    // Scroll to bottom whenever messages array changes
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim() || !socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
            console.warn("⚠️ Cannot send message: Input is empty or WebSocket is not open.");
            return;
        }

        const msg = {
            input,
            token: localStorage.getItem("dost_token"), // Get token just before sending
            to_id
        };

        try {
            socketRef.current.send(JSON.stringify(msg));
            // Optimistically add message to UI
            setMessages(prev => [...prev, { fromId: userId, toId: to_id, content: input }]);
            setInput('');
            scrollToBottom();
        } catch (err) {
            console.error("❌ Failed to send message:", err);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-lg text-gray-700">Loading chat...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
                <p className="text-xl font-semibold">⚠️ Not authenticated. Please log in to chat.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-inter">
            {/* Chat Header */}
            <div className="bg-white p-4 shadow-md flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#E5533D]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM9.5 13.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zM14.5 13.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zM19.5 13.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5z" />
                    </svg>
                    Chat with User <span className="text-[#E5533D]">{to_id}</span>
                </h2>
                {/* Could add user status or avatar here */}
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 text-lg">Start a conversation!</p>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.fromId === userId ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-3 rounded-xl shadow-sm break-words
                                ${msg.fromId === userId ? 'bg-[#E5533D] text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* Scroll target */}
            </div>

            {/* Message Input Area */}
            <div className="bg-white p-4 shadow-md flex items-center gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    aria-label="Send message"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>

            {/* Tailwind CSS CDN */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Inter font for better typography */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                `}
            </style>
        </div>
    );
}