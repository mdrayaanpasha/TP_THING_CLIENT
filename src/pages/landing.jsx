import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import {
    PhoneIcon,
    VideoCameraIcon,
    CheckCircleIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    HeartIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowPathIcon,
    SparklesIcon,
    ChatBubbleLeftRightIcon,
    CalendarIcon,
    UserIcon,
    AcademicCapIcon,
    EmojiHappyIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Mock images (in a real app, you'd import actual images)
const counselorImg = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400";
const groupTherapyImg = "https://images.unsplash.com/photo-1571260898930-4d48f1cf7e7b?q=80&w=400";
const videoCallImg = "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=400";

const HomePage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const testimonials = [
        {
            quote: "Honestly, it felt like a weight lifted. So glad I reached out. 💫",
            initials: "A.R.",
            emoji: "😌"
        },
        {
            quote: "The counselor was so understanding. I finally felt heard. 🫂",
            initials: "J.K.",
            emoji: "🥹"
        },
        {
            quote: "Easy to book, even easier to talk. A true game-changer for me. 🚀",
            initials: "S.M.",
            emoji: "✨"
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-poppins antialiased text-gray-900 bg-white min-h-screen overflow-x-hidden">
            {/* Floating emoji background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {['🤍', '🌈', '🫂', '🧠', '💭', '🤝', '💖', '🌱'].map((emoji, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100 + scrollY * 0.1],
                            x: [0, (Math.random() - 0.5) * 50],
                            rotate: [0, Math.random() * 360]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-white to-indigo-50">
                {/* Floating bubbles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-indigo-100/30"
                            style={{
                                width: Math.random() * 200 + 50,
                                height: Math.random() * 200 + 50,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, (Math.random() - 0.5) * 100],
                                x: [0, (Math.random() - 0.5) * 50],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                <div className="text-center max-w-4xl z-10 px-4">
                    <motion.h1
                        className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Mental health support <br />
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                            that gets you. 💭
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    >
                        Private, judgment-free chats with certified counselors — your way, your schedule. ✨
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden text-gray-900 bg-white border-2 border-gray-200 py-4 px-8 rounded-[2rem] text-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-md"
                        >
                            <PhoneIcon className="h-5 w-5 mr-2 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                            Book Phone Session
                            <span className="absolute inset-0 bg-gradient-to-r from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden text-white bg-gradient-to-r from-indigo-500 to-purple-500 py-4 px-8 rounded-[2rem] text-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
                        >
                            <VideoCameraIcon className="h-5 w-5 mr-2 text-white/90 group-hover:text-white transition-colors" />
                            Video Call
                            <SparklesIcon className="absolute -right-2 -top-2 h-5 w-5 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        className="mt-12 flex flex-wrap justify-center gap-4 items-center text-gray-500 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                            <UserGroupIcon className="h-4 w-4 text-indigo-500" />
                            <span>500+ happy clients</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                            <ShieldCheckIcon className="h-4 w-4 text-indigo-500" />
                            <span>100% confidential</span>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-2 bg-gray-500 rounded-full mt-1"
                            animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-14"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How it works 🤔
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Getting support has never been easier. Three simple steps to feeling better.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                emoji: "📱",
                                title: "Choose your mode",
                                description: "Phone or video, whatever feels right for you.",
                                color: "bg-indigo-100"
                            },
                            {
                                emoji: "🗓️",
                                title: "Pick a time",
                                description: "Find a slot that fits your schedule, effortlessly.",
                                color: "bg-purple-100"
                            },
                            {
                                emoji: "💖",
                                title: "Get support",
                                description: "Connect with a caring professional and start healing.",
                                color: "bg-pink-100"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className={`h-full p-8 rounded-3xl ${item.color} border-2 border-white shadow-sm group-hover:shadow-md transition-all duration-300 flex flex-col items-center`}>
                                    <div className="text-4xl mb-6">{item.emoji}</div>
                                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-6 overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-center">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Feature Showcase */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-white">
                                <div className="text-5xl mb-6">👋</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    One-on-one sessions that feel natural
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Our counselors create a safe space where you can be yourself without judgment.
                                    It's like talking to a friend who actually knows how to help.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Empathetic', 'Professional', 'Non-judgmental', 'Supportive'].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                                <img
                                    src={counselorImg}
                                    alt="Counselor session"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="text-xl font-medium">"You're not alone in this"</div>
                                        <div className="text-sm opacity-80">Licensed counselor since 2018</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-14"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What we offer 🧠
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Different ways to get support, because everyone's journey is unique.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                emoji: "👥",
                                title: "Group Sessions",
                                description: "Connect with others who understand",
                                image: groupTherapyImg
                            },
                            {
                                emoji: "🎯",
                                title: "Goal Setting",
                                description: "Personalized plans for growth",
                                image: ""
                            },
                            {
                                emoji: "💬",
                                title: "Messaging",
                                description: "Chat anytime, anywhere",
                                image: ""
                            },
                            {
                                emoji: "🎥",
                                title: "Video Calls",
                                description: "Face-to-face from your space",
                                image: videoCallImg
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    {item.image ? (
                                        <div className="h-40 bg-gray-100 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-40 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-6xl">
                                            {item.emoji}
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="text-3xl mb-3">{item.emoji}</div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-indigo-50 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-14"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Real talk from real people 🫶
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our community says.
                        </p>
                    </motion.div>

                    <div className="relative w-full mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="p-8 rounded-3xl text-left bg-white border-2 border-white shadow-sm"
                            >
                                <div className="text-4xl mb-4">{testimonials[currentTestimonial].emoji}</div>
                                <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
                                    "{testimonials[currentTestimonial].quote}"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium mr-4">
                                        {testimonials[currentTestimonial].initials}
                                    </div>
                                    <span className="text-gray-600">Anonymous Client</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none -ml-4 transition-all duration-200 hidden md:flex items-center justify-center border-2 border-gray-100"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeftIcon className="h-5 w-5 text-indigo-600" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none -mr-4 transition-all duration-200 hidden md:flex items-center justify-center border-2 border-gray-100"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRightIcon className="h-5 w-5 text-indigo-600" />
                        </button>

                        <div className="flex justify-center mt-8 gap-2">
                            {testimonials.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => setCurrentTestimonial(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'bg-indigo-600 w-6' : 'bg-gray-300 w-3'}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                    whileHover={{ scaleY: 1.5 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
                {/* Floating emoji background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {['🌟', '💫', '✨', '🫂', '💖', '🌈'].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-3xl opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, (Math.random() - 0.5) * 50],
                                x: [0, (Math.random() - 0.5) * 30],
                                rotate: [0, Math.random() * 360]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            {emoji}
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
                    >
                        Ready to feel better? <br />
                        We're here when you are. 💛
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto"
                    >
                        Take the first step today. It's easier than you think.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-indigo-600 py-4 px-8 rounded-[2rem] text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                            Get Started Now
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 text-white py-4 px-8 rounded-[2rem] text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-16 relative overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 md:mb-0"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="text-indigo-400">Well</span>Mind
                        </h3>
                        <p className="text-sm">Mental health support that fits your life.</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            {['💙', '💜', '💛'].map((emoji, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ y: -3, scale: 1.2 }}
                                    className="cursor-pointer text-xl"
                                >
                                    {emoji}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-end gap-8 text-base"
                    >
                        {['About', 'Contact', 'FAQs', 'Privacy', 'Terms', 'Careers'].map((item, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                className="hover:text-white transition-colors duration-200 relative group"
                                whileHover={{ y: -2 }}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>© 2025 WellMind. All rights reserved.</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-transparent opacity-20" />
            </footer>
        </div>
    );
};

export default HomePage;