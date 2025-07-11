import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TherapistLiveSessions = () => {
    const [sessions, setSessions] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const BACKEND_URL = 'http://localhost:4000';

    useEffect(() => {
        const fetchSessions = async () => {
            const token = localStorage.getItem('dost_token');
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

    if (loading) return <p className="text-center mt-4">⏳ Loading your sessions...</p>;
    if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

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
