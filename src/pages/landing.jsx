import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav';
export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Floating elements data
    const floatingShapes = [
        { id: 1, size: 'w-16 h-16', color: 'bg-[#ff6a5e]/10', position: 'top-1/4 left-1/4' },
        { id: 2, size: 'w-24 h-24', color: 'bg-[#ff8a73]/15', position: 'top-1/3 right-1/5' },
        { id: 3, size: 'w-20 h-20', color: 'bg-[#ff6347]/20', position: 'bottom-1/4 left-1/5' },
        { id: 4, size: 'w-12 h-12', color: 'bg-[#ff9e90]/10', position: 'bottom-1/3 right-1/4' }
    ];

    // Therapist data
    const therapists = [
        {
            id: 1,
            name: "Dr. Priya Sharma",
            specialty: "Anxiety & Depression",
            experience: "8 years",
            sessions: 420,
            rating: 4.9
        },
        {
            id: 2,
            name: "Dr. Arjun Patel",
            specialty: "Relationship Counseling",
            experience: "12 years",
            sessions: 650,
            rating: 4.8
        },
        {
            id: 3,
            name: "Dr. Meera Desai",
            specialty: "Trauma Recovery",
            experience: "10 years",
            sessions: 530,
            rating: 4.95
        }
    ];

    // Testimonials
    const testimonials = [
        {
            id: 1,
            text: "Talking to Dr. Meera helped me manage anxiety for the first time in years.",
            author: "Arjun R., 22"
        },
        {
            id: 2,
            text: "DOST made therapy affordable and accessible when I needed it most.",
            author: "Priya M., 28"
        },
        {
            id: 3,
            text: "The video sessions felt just as personal as in-person therapy.",
            author: "Vikram S., 35"
        }
    ];

    // Mouse move effect for floating elements
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fff9f8] to-[#fff1ef] overflow-hidden">
            {/* Floating background elements with subtle parallax */}
            {floatingShapes.map((shape) => (
                <div
                    key={shape.id}
                    className={`fixed ${shape.size} ${shape.color} ${shape.position} rounded-full blur-xl opacity-70 z-0`}
                    style={{
                        transform: `translate(
              ${(mousePosition.x - window.innerWidth / 2) * 0.02}px,
              ${(mousePosition.y - window.innerHeight / 2) * 0.02}px
            )`
                    }}
                />
            ))}
            <center className='mt-2'>
                <Navbar></Navbar></center>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Floating tomato gradient blob */}
                <div className="absolute -right-40 -top-40 w-96 h-96 bg-gradient-to-br from-[#ff6a5e] to-[#ff8a73] rounded-full opacity-10 blur-3xl z-0"></div>

                <div className="w-[90vw] max-w-7xl mx-auto flex flex-col md:flex-row items-center z-10">
                    <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e4d] to-[#ff7b6b]">
                                Healing
                            </span> begins with one conversation.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            Licensed therapists. Private, judgment-free. Sessions starting at ₹299.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/therapists"
                                className="px-8 py-3.5 bg-gradient-to-r from-[#ff6a5e] to-[#ff8473] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
                            >
                                <span className="relative z-10">Find a Therapist</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5b4d] to-[#ff776b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link
                                to="/pricing"
                                className="px-8 py-3.5 bg-white text-[#ff6347] rounded-xl font-medium border border-[#ffd8d0] hover:border-[#ffc6ba] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                            >
                                Explore Plans
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="relative w-4/5 max-w-md">
                            {/* Main illustration with floating effect */}
                            <div
                                className="bg-gradient-to-tr from-[#ff6a5e] to-[#ff8a73] rounded-3xl p-8 aspect-square flex items-center justify-center shadow-2xl rotate-6 transform transition-transform duration-700 hover:rotate-3"
                                style={{
                                    transform: `rotate(6deg) translate(
                    ${(mousePosition.x - window.innerWidth / 2) * 0.01}px,
                    ${(mousePosition.y - window.innerHeight / 2) * 0.01}px
                  )`
                                }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 aspect-square flex items-center justify-center shadow-inner">
                                    <span className="text-8xl">🧘</span>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#ff9e90]/50 rounded-full blur-md"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#ff8473]/30 rounded-full blur-md"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative py-20 bg-white">
                <div className="w-[90vw] max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e4d] to-[#ff7b6b]">DOST</span> Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { icon: '👨‍⚕️', title: 'Choose a therapist', desc: 'Browse profiles and find your perfect match' },
                            { icon: '📅', title: 'Book a session', desc: 'Select time and therapy type that works for you' },
                            { icon: '❤️', title: 'Talk your heart out', desc: 'Connect securely and start your healing journey' }
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl border border-[#ffd8d0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5"
                            >
                                <div className="text-5xl mb-6">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Section background elements */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6a5e]/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff8473]/10 rounded-full blur-2xl"></div>
            </section>

            {/* Why DOST? */}
            <section className="relative py-20 bg-gradient-to-br from-[#fff1ef] to-[#ffeae6] overflow-hidden">
                <div className="w-[90vw] max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e4d] to-[#ff7b6b]">DOST</span>?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {[
                            { icon: '🎓', title: 'Certified Professionals', desc: 'All therapists are licensed and verified' },
                            { icon: '🔒', title: 'End-to-End Encryption', desc: 'Your conversations remain completely private' },
                            { icon: '🧾', title: 'Affordable Plans', desc: 'Special pricing for students and seniors' },
                            { icon: '🕒', title: 'Available 24/7', desc: 'Support whenever you need it' }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#ffd8d0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Floating blob */}
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ff6a5e] to-[#ff8a73] rounded-full opacity-10 blur-3xl z-0"></div>
            </section>

            {/* Featured Therapists */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="w-[90vw] max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e4d] to-[#ff7b6b]">Therapists</span>
                        </h2>
                        <Link to="/therapists" className="text-[#ff6347] hover:text-[#ff4d35] font-medium flex items-center">
                            View all <span className="ml-1">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {therapists.map((therapist) => (
                            <div
                                key={therapist.id}
                                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden border border-[#ffd8d0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5"
                            >
                                <div className="p-6">
                                    <div className="flex items-start mb-5">
                                        <div className="relative">
                                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                            <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-full shadow-sm border border-[#ffd8d0] text-xs font-bold text-[#ff6347]">
                                                ⭐ {therapist.rating}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold text-gray-800 text-lg">{therapist.name}</h3>
                                            <span className="block text-sm text-gray-500 mt-1">{therapist.sessions}+ sessions</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="bg-[#ffede9] text-[#ff6347] text-xs px-3 py-1 rounded-full">
                                            {therapist.specialty}
                                        </span>
                                        <span className="bg-[#ffede9] text-[#ff6347] text-xs px-3 py-1 rounded-full">
                                            {therapist.experience} experience
                                        </span>
                                    </div>

                                    <Link
                                        to={`/therapists/${therapist.id}`}
                                        className="block w-full py-3 text-center bg-gradient-to-r from-[#ff6a5e] to-[#ff8473] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                                    >
                                        Book a Session
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Background elements */}
                <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#ff9e90]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 right-0 w-40 h-40 bg-[#ff8473]/15 rounded-full blur-2xl"></div>
            </section>

            {/* Testimonials */}
            <section className="relative py-20 bg-gradient-to-br from-[#fff1ef] to-[#ffeae6] overflow-hidden">
                <div className="w-[90vw] max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e4d] to-[#ff7b6b]">Clients</span> Say
                    </h2>

                    <div className="relative h-64">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm max-w-2xl mx-auto border border-[#ffd8d0]">
                                    <p className="text-xl text-gray-700 italic mb-6">"{testimonial.text}"</p>
                                    <p className="text-gray-600 font-medium">— {testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-[#ff6347] w-6' : 'bg-[#ffd8d0]'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#ff6a5e]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#ff8a73]/15 rounded-full blur-xl"></div>
            </section>

            {/* CTA */}
            <section className="relative py-20 bg-gradient-to-r from-[#ff6a5e] to-[#ff8473] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>
                <div className="w-[90vw] max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to begin your journey?
                    </h2>
                    <p className="text-[#ffd8d0] max-w-xl mx-auto mb-10 text-lg">
                        Take the first step towards mental wellness today
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/signup"
                            className="px-8 py-3.5 bg-white text-[#ff6347] rounded-xl font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            Start for Free
                        </Link>
                        <Link
                            to="/pricing"
                            className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                        >
                            See Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-12 bg-white border-t border-[#ffd8d0]">
                <div className="w-[90vw] max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-gradient-to-r from-[#ff6a5e] to-[#ff8473] text-white px-2 py-1 rounded mr-2">DOST</span>
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Mental wellness made accessible, affordable, and stigma-free.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Careers', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-[#ff6347] text-sm transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                {['Terms', 'Privacy', 'Security'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-[#ff6347] text-sm transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="mailto:support@dostapp.in" className="text-gray-600 hover:text-[#ff6347] text-sm transition-colors">
                                        support@dostapp.in
                                    </a>
                                </li>
                                <li className="flex space-x-4 mt-4">
                                    {['twitter', 'facebook', 'instagram'].map((platform) => (
                                        <a
                                            key={platform}
                                            href="#"
                                            className="text-gray-400 hover:text-[#ff6347] transition-colors"
                                            aria-label={platform}
                                        >
                                            <span className="sr-only">{platform}</span>
                                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                                <div className="w-3 h-3 bg-[#ff6347] rounded-full"></div>
                                            </div>
                                        </a>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-[#ffd8d0] mt-10 pt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} DOST Mental Health App. All rights reserved.
                    </div>
                </div>
                {/* Footer decoration */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fff9f8] to-transparent pointer-events-none"></div>
            </footer>
        </div>
    );
}