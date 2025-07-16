import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';

export default function UserTherapySessions() {
    const [sessions, setSessions] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const BACKEND_URL = `https://apidost.vercel.app`;
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
            if (!token) return setError('User not logged in.');

            try {
                const res = await axios.get(`${BACKEND_URL}/api/therapy/sessions`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSessions(res.data.data);
            } catch (err) {
                console.error(err);
                setError(err.response?.data?.message || 'Failed to fetch sessions');
            }
        };

        fetchSessions();
    }, []);

    const handleCancel = async (sessionId) => {
        const token = localStorage.getItem('dost_token');
        if (!token) return setError('User not logged in.');
        if (!window.confirm('Cancel this session?')) return;

        setLoading(true);
        try {
            await axios.delete(`${BACKEND_URL}/api/therapy/sessions/${sessionId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSessions((prev) => prev.filter((s) => s.id !== sessionId));
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Cancellation failed');
        } finally {
            setLoading(false);
        }
    };

    const isWithinTwoHours = (date) => {
        const now = new Date();
        const sessionTime = new Date(date);
        const diff = Math.abs(sessionTime - now) / (1000 * 60 * 60);
        return diff <= 2;
    };

    const handleSessionAction = (session) => {
        session.therapyType === 'MESSAGE'
            ? (window.location.href = `/chat/to/${session.therapistId}`)
            : navigate('/videoCall');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fefaf6] to-[#fff] flex justify-center px-4 py-8">
            <div className="w-[90vw] max-w-7xl space-y-10">
                <Navbar></Navbar>
                <div className="relative bg-gradient-to-br from-rose-100 via-white to-rose-50 py-10 px-6 mb-12 rounded-3xl shadow-md overflow-hidden">
                    <div className="flex items-center gap-4">
                        <div className="text-3xl">🌿</div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Hello again 👋</h2>
                            <p className="text-sm text-gray-600">Here’s a gentle reminder of your upcoming sessions.</p>
                        </div>
                    </div>
                </div>


                {error && <p className="text-red-500 text-center">{error}</p>}
                {sessions.length === 0 && !error && (
                    <p className="text-gray-600 text-center">You have no sessions booked currently.</p>
                )}

                <div className="grid grid-cols-1 gap-6">
                    {sessions.map((session) => (
                        <div
                            key={session.id}
                            className="bg-white/80 border border-gray-200 rounded-2xl shadow p-6 hover:shadow-md transition-all"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <div className="space-y-1">
                                    <div className="text-sm text-gray-700 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#ff6347]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {new Date(session.date).toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-700 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#ff6347]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9a4 4 0 10-8 0 4 4 0 008 0zM6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                                        </svg>
                                        {session.therapist?.name || 'Unnamed Therapist'}
                                    </div>
                                </div>

                                <div className="flex flex-col items-start sm:items-end gap-2">
                                    <button
                                        onClick={() => handleSessionAction(session)}
                                        className="px-4 py-2 text-white rounded-full bg-gradient-to-tr from-[#ff6a5e] to-[#ff8473] hover:shadow-md text-sm"
                                    >
                                        {session.therapyType === 'MESSAGE' ? 'Chat Now' : 'Join Video'}
                                    </button>

                                    <button
                                        onClick={() => handleCancel(session.id)}
                                        disabled={loading}
                                        className="px-4 py-2 border border-[#ff6347] text-[#ff6347] rounded-full hover:bg-[#fff4f2] disabled:opacity-50 transition text-sm"
                                    >
                                        Cancel
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
