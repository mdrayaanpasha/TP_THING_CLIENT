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

    const BACKEND_URL = `http://localhost:4000`;

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
            window.location.href = "/"
        } catch (err) {
            setMessage(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {isLogin ? 'Welcome Back' : 'Join Us'}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {isLogin ? 'Login to your account' : 'Create your account'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
                            />
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
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
                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
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
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#ff6347] text-white rounded-lg font-medium hover:bg-[#e5533d] transition-colors"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <div className="text-center text-sm text-gray-500">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={toggleForm} className="text-[#ff6347] hover:underline ml-1">
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </div>

                {message && (
                    <p className="text-center text-sm text-red-500">{message}</p>
                )}
            </div>
        </div>
    );
}
