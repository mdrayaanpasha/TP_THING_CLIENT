import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';

export default function TherapistDirectory() {
    const [therapists, setTherapists] = useState([]);
    const [selected, setSelected] = useState(null);
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({ title: 'Therapy Session', date: '', therapyType: 'MESSAGE' });

    const BACKEND_URL = `https://apidost.vercel.app`;
    const navigate = useNavigate();
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
        const fetchTherapists = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/therapy/therapists`);
                setTherapists(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTherapists();
    }, []);

    const handleBook = async (e) => {
        e.preventDefault();

        if (!token) {
            setMessage('Please login to book a session');
            return;
        }

        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/therapy/book`,
                {
                    therapistId: Number(selected.id),
                    date: form.date,
                    title: form.title || 'Therapy Session',
                    therapyType: form.therapyType,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage(res.data.message);
            setTimeout(() => setMessage(''), 3000);
            setSelected(null);  // Reset view after booking
        } catch (err) {
            if (err.response?.status === 409) {
                setMessage('Therapist is already booked at this time. Please choose another slot.');
            } else {
                setMessage(err.response?.data?.message || 'Booking failed');
            }
        }
    };

    return (
        <div className="min-h-screen w-[90vw] mt-4 mx-auto bg-white text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-rose-100 via-white to-rose-50 py-10 px-6 mb-12 rounded-3xl shadow-md overflow-hidden">
                <div className="absolute top-4 left-6 text-3xl opacity-20 blur-sm">🧘‍♀️</div>
                <div className="absolute top-20 right-10 text-4xl opacity-10 rotate-12">🌿</div>
                <div className="absolute bottom-8 left-10 text-2xl opacity-20 -rotate-12">💬</div>
                <div className="absolute bottom-4 right-6 text-3xl opacity-10">🧠</div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="text-5xl text-rose-400">🤝</div>
                    <div className="text-left">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Your space to feel heard.
                        </h2>
                        <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                            Connect with certified therapists, explore sessions at your own pace, and take the first step toward better mental wellness.
                        </p>
                    </div>
                </div>
            </section>

            <div className="pb-16">
                {!selected ? (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-6">Available Therapists</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {therapists.map((therapist) => (
                                <div key={therapist.id} className="bg-white border border-[#ffe2dc] rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl">🧑‍⚕️</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">{therapist.name}</h3>
                                            <p className="text-sm text-gray-500 italic">Specialist in Mindfulness</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelected(therapist)}
                                        className="mt-4 w-full bg-[#ff6a5e] hover:bg-[#e5533d] text-white text-sm py-2 rounded-lg transition"
                                    >
                                        Book Session
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow border border-gray-200">
                        <button
                            onClick={() => setSelected(null)}
                            className="text-sm text-gray-500 hover:text-[#ff6347] mb-4"
                        >
                            ← Back to list
                        </button>

                        <h2 className="text-xl font-bold mb-4">Book with {selected.name}</h2>
                        <form onSubmit={handleBook} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Session Title"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                                required
                            />
                            <input
                                type="datetime-local"
                                value={form.date}
                                onChange={(e) => setForm({ ...form, date: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                                required
                            />
                            <select
                                value={form.therapyType}
                                onChange={(e) => setForm({ ...form, therapyType: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                                required
                            >
                                <option value="MESSAGE">Message</option>
                                <option value="VIDEO_CALL">Video Call</option>
                            </select>
                            <button
                                type="submit"
                                className="w-full bg-[#ff6a5e] hover:bg-[#e5533d] text-white py-2 rounded-lg text-sm"
                            >
                                Confirm Booking
                            </button>
                        </form>
                        {message && (
                            <p className="mt-4 text-sm text-center text-[#ff6a5e]">{message}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
