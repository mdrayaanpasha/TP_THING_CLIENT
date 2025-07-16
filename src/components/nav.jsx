import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate and close menu
  const navigateAndClose = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <nav className="max-w-[90vw] backdrop-blur-md bg-white/30 border border-white/20 shadow-md rounded-xl px-4 py-3 mb-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-lg font-semibold text-gray-800">Besties</h1>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden"> {/* Show only on small screens */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6347]"
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon using SVGs or divs */}
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row gap-3"> {/* Hide on small screens */}
        <button
          onClick={() => navigate('/my-sessions')}
          className="cursor-pointer px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm"
        >
          My Therapies
        </button>
        <button
          onClick={() => navigate('/resources')}
          className="cursor-pointer px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm"
        >
          Resources
        </button>
        <button
          onClick={() => navigate('/sessions')}
          className="cursor-pointer px-4 py-2 bg-[#ff6347] text-white rounded-lg hover:bg-[#e5533d] transition-colors text-sm"
        >
          Therapists Around Me
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md border-t border-white/20 shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => navigateAndClose('/my-sessions')}
            className=" cursor-pointer px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm w-4/5"
          >
            My Therapies
          </button>
          <button
            onClick={() => navigateAndClose('/resources')}
            className=" cursor-pointer px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm w-4/5"
          >
            Resources
          </button>
          <button
            onClick={() => navigateAndClose('/sessions')}
            className=" cursor-pointer px-4 py-2 bg-[#ff6347] text-white rounded-lg hover:bg-[#e5533d] transition-colors text-sm w-4/5"
          >
            Therapists Around Me
          </button>
        </div>
      )}
    </nav>
  );
}