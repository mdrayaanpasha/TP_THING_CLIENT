import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserTherapySessions() {
    const [sessions, setSessions] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const BACKEND_URL = `http://localhost:3000`;

    const fetchSessions = async () => {
        const token = localStorage.getItem('dost_token');
        if (!token) {
            setError('User not logged in.');
            return;
        }

        try {
            const res = await axios.get(`${BACKEND_URL}/api/therapy/sessions`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSessions(res.data.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Failed to fetch sessions');
        }
    };

    useEffect(() => {
        fetchSessions();
    }, []);

    const handleCancel = async (sessionId) => {
        const token = localStorage.getItem('dost_token');
        if (!token) {
            setError('User not logged in.');
            return;
        }

        if (!window.confirm('Are you sure you want to cancel this session?')) return;

        setLoading(true);
        try {
            await axios.delete(`${BACKEND_URL}/api/therapy/sessions/${sessionId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSessions((prev) => prev.filter((s) => s.id !== sessionId));
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Cancellation failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Your Therapy Sessions
            </h1>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {sessions.length === 0 && !error && (
                <p className="text-gray-600 text-center">No sessions booked yet.</p>
            )}

            <div className="max-w-3xl mx-auto space-y-4">
                {sessions.map((session) => (
                    <div key={session.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700">
                            {session.title}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Date: {new Date(session.date).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                            Therapist: {session.therapist?.name} ({session.therapist?.email})
                        </p>
                        <button
                            onClick={() => handleCancel(session.id)}
                            disabled={loading}
                            className="mt-3 text-sm text-red-600 hover:underline disabled:opacity-50"
                        >
                            Cancel Session
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
