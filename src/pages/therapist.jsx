import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TherapistDirectory() {
    const [therapists, setTherapists] = useState([]);
    const [selected, setSelected] = useState(null);
    const [form, setForm] = useState({ title: '', date: '' });
    const [message, setMessage] = useState('');
    const BACKEND_URL = `http://localhost:3000`;

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
        if (!selected) return;

        const token = localStorage.getItem('dost_token');
        if (!token) {
            setMessage('Please login to book a session');
            return;
        }

        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/therapy/book`,
                {
                    therapistId: selected.id,
                    date: form.date,
                    title: form.title,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Booking failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Therapist Directory</h1>

            {!selected ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {therapists.map((therapist) => (
                        <div key={therapist.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-gray-800">{therapist.name}</h2>
                            <p className="text-sm text-gray-500">{therapist.email}</p>
                            {therapist.price && (
                                <p className="text-sm mt-2 text-indigo-600 font-semibold">₹{therapist.price}</p>
                            )}
                            <button
                                onClick={() => setSelected(therapist)}
                                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                            >
                                Book Session
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Book with {selected.name}
                    </h2>
                    <form onSubmit={handleBook} className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Session Title"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        <input
                            type="datetime-local"
                            name="date"
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                        >
                            Confirm Booking
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelected(null)}
                            className="w-full py-2 text-sm text-gray-500 hover:text-indigo-600"
                        >
                            ← Back to therapists
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
                </div>
            )}
        </div>
    );
}
