import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TherapistLiveSessions = () => {
    const [sessions, setSessions] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const BACKEND_URL = 'https://apidost.vercel.app';
    const token = localStorage.getItem('dost_token');

    if (!token) {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen bg-[#E5533D] text-white p-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
                    />
                </svg>
                <h1 className="text-xl font-bold mb-2">You're not logged in</h1>
                <p className="mb-4 opacity-80">Please log in to continue.</p>
                <button
                    onClick={() => navigate('/auth')}
                    className="bg-white text-[#E5533D] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                    Go to Login
                </button>
            </section>
        );
    }
    useEffect(() => {
        const fetchSessions = async () => {
            if (!token) {
                setError('User not logged in.');
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(`${BACKEND_URL}/api/theraphist/sessions/upcoming`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // ✅ Correct key access based on your API response
                setSessions(res.data.sessions || []);
            } catch (err) {
                console.error(err);
                setError(err.response?.data?.message || 'Failed to fetch sessions');
            } finally {
                setLoading(false);
            }
        };

        fetchSessions();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center mt-8 text-[#E5533D]">
                <svg
                    className="animate-spin h-10 w-10 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4A8 8 0 004 12z"
                    />
                </svg>
                <p className="text-lg font-semibold animate-pulse">Loading your sessions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center mt-8 text-red-500">
                <svg
                    className="w-12 h-12 mb-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.994-1.851L21 18V6c0-1.054-.816-1.918-1.851-1.994L18 4H6c-1.054 0-1.918.816-1.994 1.851L4 6v12c0 1.054.816 1.918 1.851 1.994L6 20z"
                    />
                </svg>
                <p className="text-md font-medium text-center">{error}</p>
            </div>
        );
    }

    if (!token) {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen bg-[#E5533D] text-white p-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
                    />
                </svg>
                <h1 className="text-xl font-bold mb-2">You're not logged in</h1>
                <p className="mb-4 opacity-80">Please log in to continue.</p>
                <button
                    onClick={() => navigate('/auth')}
                    className="bg-white text-[#E5533D] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                    Go to Login
                </button>
            </section>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">🧑‍⚕️ Your Live Sessions</h1>

            {sessions.length === 0 ? (
                <p className="text-center text-gray-500">No ongoing sessions right now.</p>
            ) : (
                <div className="max-w-3xl mx-auto space-y-4">
                    {sessions.map((session) => (
                        <div key={session.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-700">{session.title}</h2>
                            <p className="text-sm text-gray-500">
                                Scheduled At: {new Date(session.date).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-500">
                                Client: {session.client?.name} ({session.client?.email})
                            </p>

                            {session.therapyType === 'MESSAGE' && (
                                <a
                                    href={`/chat/to/${session.clientId}`}
                                    className="mt-2 inline-block text-sm text-indigo-600 hover:underline"
                                >
                                    💬 Chat Now
                                </a>
                            )}

                            {session.therapyType === 'VIDEO_CALL' && (
                                <a
                                    href="/videoCall"
                                    className="mt-2 inline-block text-sm text-green-600 hover:underline"
                                >
                                    🎥 Join Video Call
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TherapistLiveSessions;
