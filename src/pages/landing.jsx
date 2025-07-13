import React from 'react';
import Navbar from "../components/nav"
import Physcologist from "../assets/images/Physcologist.png"
import Img1 from "../assets/images/anxiety.jpeg";
import Img2 from "../assets/images/resellience.jpeg"
import Img3 from "../assets/images/3.jpeg"

function Homepage() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <center>
        <Navbar />
      </center>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 text-center overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text leading-tight mb-4 animate-fade-in-up">
            Your Safe Space for <span className="text-[#FF6347]">Emotional Wellness</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Connect with verified experts for confidential counseling and support, anytime, anywhere.
          </p>
          <div className="relative max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
            <input
              type="text"
              placeholder="Find your perfect expert (e.g., Depression, Anxiety)"
              className="w-full px-6 py-4 pr-16 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347] shadow-lg text-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6347] text-white p-3 rounded-full hover:bg-[#E55347] transition-colors duration-200">
              {/* Search Icon (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="mt-12 bg-white p-6 rounded-2xl  max-w-5xl mx-auto animate-fade-in-up delay-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-5">Trusted by leading organizations</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {/* Placeholder Logos */}
              <img src="https://placehold.co/100x40/FFF/000?text=SAMSUNG" alt="Samsung Logo" className="border border-gray-200 rounded-xl h-9 opacity-80 hover:opacity-100 transition-opacity duration-200" />
              <img src="https://placehold.co/100x40/FFF/000?text=IIT BOMBAY" alt="Samsung Logo" className="border border-gray-200 rounded-xl h-9 opacity-80 hover:opacity-100 transition-opacity duration-200" />
              <img src="https://placehold.co/100x40/FFF/000?text=SONY" alt="Samsung Logo" className="border border-gray-200 rounded-xl h-9 opacity-80 hover:opacity-100 transition-opacity duration-200" />
              <img src="https://placehold.co/100x40/FFF/000?text=LOREAL " alt="Samsung Logo" className="border border-gray-200 rounded-xl h-9 opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>

          <div className="mt-12 flex flex-nowrap justify-center gap-4 overflow-x-auto scrollbar-hide">
            {/* Stat Card 1: Satisfaction */}
            <div
              className="flex-none p-4 bg-gradient-to-br from-[#FF6347] to-[#E55347] text-white rounded-xl shadow-md text-center w-36 md:w-40 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-200"
            >
              <div className="flex justify-center items-center mb-1">
                {/* Icon for Satisfaction - Example: Check Circle / Sparkles */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-3xl md:text-4xl font-extrabold leading-none">98%</p>
              </div>
              <p className="text-sm md:text-sm opacity-90">Satisfaction</p>
            </div>

            {/* Stat Card 2: Experts */}
            <div
              className="flex-none p-4 bg-gradient-to-br from-[#FF6347] to-[#E55347] text-white rounded-xl shadow-md text-center w-36 md:w-40 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-300"
            >
              <div className="flex justify-center items-center mb-1">
                {/* Icon for Experts - Example: Users / Briefcase */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.623-4.003 9.353 9.353 0 00-4.121-.952h-.002A9.38 9.38 0 007.5 19.128V21L3 20.25m11.25-4.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <p className="text-3xl md:text-4xl font-extrabold leading-none">500+</p>
              </div>
              <p className="text-sm md:text-sm opacity-90">Experts</p>
            </div>

            {/* Stat Card 3: Projects */}
            <div
              className="flex-none p-4 bg-gradient-to-br from-[#FF6347] to-[#E55347] text-white rounded-xl shadow-md text-center w-36 md:w-40 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-400"
            >
              <div className="flex justify-center items-center mb-1">
                {/* Icon for Projects - Example: Clipboard / Folder */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 22.5H5.625a2.25 2.25 0 01-2.25-2.25V7.252A2.25 2.25 0 015.625 5H13.5a2.25 2.25 0 012.25 2.25V19.5a2.25 2.25 0 01-2.25 2.25H5.625z" />
                </svg>
                <p className="text-3xl md:text-4xl font-extrabold leading-none">25K+</p>
              </div>
              <p className="text-sm md:text-base opacity-90">Projects</p>
            </div>

            {/* Stat Card 4: Partners */}
            <div
              className="flex-none p-4 bg-gradient-to-br from-[#FF6347] to-[#E55347] text-white rounded-xl shadow-md text-center w-36 md:w-40 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-500"
            >
              <div className="flex justify-center items-center mb-1">
                {/* Icon for Partners - Example: Handshake / Globe */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m-4.5 7.5h15m-14.25-3L7.5 14.25m-3-4.5h15m-1.5 0v4.5m-12.75-9l.805-2.414A2.25 2.25 0 0110.258 3h3.486c.895 0 1.704.587 2.059 1.414l.805 2.414m-12.75 0h7.5" />
                </svg>
                <p className="text-3xl md:text-4xl font-extrabold leading-none">120+</p>
              </div>
              <p className="text-sm md:text-base opacity-90">Partners</p>
            </div>

            {/* Stat Card 5: Rating */}
            <div
              className="flex-none p-4 bg-gradient-to-br from-[#FF6347] to-[#E55347] text-white rounded-xl shadow-md text-center w-36 md:w-40 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-600"
            >
              <div className="flex justify-center items-center mb-1">
                {/* Icon for Rating - Example: Star / Trophy */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L3.92 9.89a.562.562 0 01.32-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
                </svg>
                <p className="text-3xl md:text-4xl font-extrabold leading-none">4.9/5</p>
              </div>
              <p className="text-sm md:text-base opacity-90">Rating</p>
            </div>
          </div>

          {/* Custom CSS for animations and scrollbar-hide (if not in your Tailwind config) */}
          <style>{`
            /* Example for scrollbar-hide */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }

            @keyframes fade-in-up {
              from {
              opacity: 0;
            transform: translateY(20px);
              }
              to {
              opacity: 1;
            transform: translateY(0);
              }
            }

            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0; /* Ensures it's hidden before animation starts */
            }
            .delay-200 {animation-delay: 0.2s; }
            .delay-300 {animation-delay: 0.3s; }
            .delay-400 {animation-delay: 0.4s; }
            .delay-500 {animation-delay: 0.5s; }
            .delay-600 {animation-delay: 0.6s; }
            `}
          </style>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF0EC] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 relative text-center">
            <span className="relative z-10">How It Works?</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[#FF6347] rounded-full z-0 opacity-75"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="md:w-1/2 animate-fade-in-left">
              {/* Placeholder Image - Ensure this path is correct */}
              <img
                src={Physcologist}
                alt="How it Works Illustration"
                className="rounded-3xl shadow-xl transform hover:scale-102 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="md:w-1/2 text-left space-y-10">
              {/* Step 1 */}
              <div className="flex items-start space-x-5 group cursor-pointer animate-fade-in-right delay-200">
                <div className="flex-shrink-0 bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-3 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.623-4.003 9.353 9.353 0 00-4.121-.952h-.002A9.38 9.38 0 007.5 19.128V21L3 20.25m11.25-4.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-1 group-hover:text-[#CD5C5C] transition-colors duration-300">1. Pick Your Vibe</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Browse profiles of our awesome psychologists, counselors, and life coaches. Find someone who just gets you.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-5 group cursor-pointer animate-fade-in-right delay-400">
                <div className="flex-shrink-0 bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-3 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-1 group-hover:text-[#CD5C5C] transition-colors duration-300">2. Book Your Slot</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Chat, call, or video – whatever feels right! Schedule your session whenever it works best for you.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-5 group cursor-pointer animate-fade-in-right delay-600">
                <div className="flex-shrink-0 bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-3 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-1 group-hover:text-[#CD5C5C] transition-colors duration-300">3. Level Up Your Well-being</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Get personalized guidance and support to crush your goals and feel your best self.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
  opacity: 0; /* Ensures it's hidden before animation starts */
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
  opacity: 0; /* Ensures it's hidden before animation starts */
}

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.delay-600 { animation-delay: 0.6s; }
`}</style>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF0EC] to-[#FFE0E0]">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 relative">
            <span className="relative z-10">Why Choose Us?</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[#FF6347] rounded-full z-0 opacity-75"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              <div className="bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-4 mb-6 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#CD5C5C] transition-colors duration-300">Complete Privacy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Your conversations are 100% confidential and secure. We prioritize your trust above all else.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              <div className="bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-4 mb-6 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#CD5C5C] transition-colors duration-300">Anytime, Anywhere</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Access support from the comfort of your home, on your schedule, whenever you need it.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              <div className="bg-[#FFF0EC] text-[#CD5C5C] rounded-full p-4 mb-6 transition-all duration-300 group-hover:bg-[#FFDAB9] group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0h.01M12 12h.01M12 16h.01M9 21h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#CD5C5C] transition-colors duration-300">Accessible & Affordable</h3>
              <p className="text-gray-600 leading-relaxed text-sm">High-quality mental health support made affordable and easily accessible for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF0EC] to-[#FFE0E0]">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 relative">
            <span className="relative z-10">Stories of Transformation</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[#FF6347] rounded-full z-0 opacity-75"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              {/* You could add a small profile image here for more impact if available */}
              <p className="text-gray-700 italic text-md mb-4 leading-relaxed">"YourDost helped me navigate through a tough phase. Incredibly supportive!"</p>
              <p className="font-bold text-gray-800 text-lg">- Anjali R.</p>
              <p className="text-sm text-[#CD5C5C] mt-1">Battled Anxiety</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              <p className="text-gray-700 italic text-md mb-4 leading-relaxed">"Found the perfect expert who guided me to better manage stress. Highly recommend!"</p>
              <p className="font-bold text-gray-800 text-lg">- Rohit S.</p>
              <p className="text-sm text-[#CD5C5C] mt-1">Managed Stress</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center group">
              <p className="text-gray-700 italic text-md mb-4 leading-relaxed">"The platform is super convenient. Talked to someone whenever I needed, without judgment."</p>
              <p className="font-bold text-gray-800 text-lg">- Pooja M.</p>
              <p className="text-sm text-[#CD5C5C] mt-1">Improved Well-being</p> {/* Changed from "Improved Relationships" for broader appeal */}
            </div>
          </div>
        </div>
      </section>

      {/* resources */}
      <section className="py-20 bg-[#FFF0EC] overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-16 relative">
            <span className="relative z-10">Resources For You</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[#FF6347] rounded-full z-0 opacity-75"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Blog Post Card 1 */}
            <a href="#" className="block bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <img src={Img1} alt="Understanding Anxiety" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="p-6 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#CD5C5C] mb-2 group-hover:text-[#FF6347] transition-colors duration-300">Understanding Anxiety: A Guide</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">Learn about causes, symptoms, and practical coping mechanisms.</p>
                <span className="text-[#CD5C5C] font-semibold group-hover:underline group-hover:text-[#FF6347] transition-colors duration-300 flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Blog Post Card 2 */}
            <a href="#" className="block bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <img src={Img2} alt="Mindfulness for Beginners" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="p-6 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#CD5C5C] mb-2 group-hover:text-[#FF6347] transition-colors duration-300">Mindfulness for Beginners: Practices</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">Discover simple exercises to bring calm into your daily life.</p>
                <span className="text-[#CD5C5C] font-semibold group-hover:underline group-hover:text-[#FF6347] transition-colors duration-300 flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Blog Post Card 3 */}
            <a href="#" className="block bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <img src={Img3} alt="Building Resilience" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="p-6 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#CD5C5C] mb-2 group-hover:text-[#FF6347] transition-colors duration-300">Building Resilience: Strategies</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">Develop mental strength and bounce back stronger from challenges.</p>
                <span className="text-[#CD5C5C] font-semibold group-hover:underline group-hover:text-[#FF6347] transition-colors duration-300 flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          {/* Optional: Call to action for more resources */}
          <div className="mt-16">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#FF6347] hover:bg-[#E55347] transition-colors duration-300 md:text-lg">
              Explore All Resources &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-[tomato] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-12">

            {/* Brand Info */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-extrabold mb-4 leading-tight text-white">YourDost</h3>
              <p className="text-sm opacity-90 leading-relaxed max-w-xs text-[#FFE0E0]">
                Your trusted partner for mental wellness. We're here to listen, support, and guide you.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b-2 border-white border-opacity-30 pb-2 inline-block text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">About Us</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Our Therapists</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b-2 border-white border-opacity-30 pb-2 inline-block text-white">Our Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Online Counseling</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Stress Management</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Relationship Support</a></li>
                <li><a href="#" className="hover:text-[#FFDAB9] transition-colors duration-200 text-[#FFE0E0]">Self-Help Tools</a></li>
              </ul>
            </div>

            {/* Connect & Legal */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 border-b-2 border-white border-opacity-30 pb-2 inline-block text-white">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {/* Social Media Icons with improved colors and hover */}
                <a href="#" aria-label="Facebook" className="text-white hover:text-[#FFDAB9] transition-colors duration-200 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.772 1.667 4.92 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.252-1.667 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.251-.149-4.771-1.667-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.251 1.667-4.772 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072C2.79 0 1.14 1.65 1.067 4.923.01 6.204 0 6.612 0 9.875s.014 3.668.072 4.947c.074 3.273 1.724 4.924 4.997 4.997 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c3.273-.074 4.924-1.724 4.997-4.997.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947C22.21 1.65 20.56 0 17.287 0h-4.947zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.5-10.162a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" /></svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-white hover:text-[#FFDAB9] transition-colors duration-200 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.36-1.64.6-2.5.7.9-.54 1.5-1.4 1.8-2.4-.8.48-1.7.82-2.6.98C18.3 3.6 17.2 3 16 3c-2.4 0-4.3 1.9-4.3 4.3 0 .34.04.67.1 1-.36-.02-.7-.08-1-.14-3-.16-5.6-1.6-7.4-4.2-.3.5-.5 1.2-.5 1.9 0 1.5.8 2.8 2 3.6-.7 0-1.3-.2-1.8-.5v.06c0 2.1 1.5 3.8 3.5 4.2-.3.08-.7.12-1 .12-.2 0-.4 0-.6-.06.5 1.7 2.1 2.9 4 2.9-1.5 1.2-3.4 1.9-5.5 1.9-.3 0-.7 0-1-.06C2.9 20.2 5 21 7.3 21c8" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;