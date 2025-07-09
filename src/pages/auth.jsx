import React, { useState } from 'react';
import axios from 'axios';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        type: 'NORMAL_USER',
        price: ''
    });
    const [message, setMessage] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const BACKEND_URL = `http://localhost:3000`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = isLogin ? `${BACKEND_URL}/api/auth/login` : `${BACKEND_URL}/api/auth/register`;
            const payload = isLogin ? {
                email: formData.email,
                password: formData.password
            } : formData;

            const res = await axios.post(url, payload);
            setMessage(res.data.message);
            if (res.data.token) localStorage.setItem('dost_token', res.data.token);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    {isLogin ? 'Login to your account' : 'Create a new account'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                <option value="NORMAL_USER">Normal User</option>
                                <option value="THERAPIST">Therapist</option>
                            </select>
                            {formData.type === 'THERAPIST' && (
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Therapy Price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            )}
                        </>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={toggleForm} className="text-indigo-600 hover:underline">
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>

                {message && (
                    <p className="mt-4 text-center text-sm text-red-500">{message}</p>
                )}
            </div>
        </div>
    );
}
