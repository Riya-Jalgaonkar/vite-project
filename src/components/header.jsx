import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/#joinus", label: "Join Us" },
    { to: "/#contact", label: "Contact" },
    { to: "/#customers", label: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : "backdrop-blur-sm"
      }`}
      style={{
        background: isScrolled
          ? "rgba(14, 42, 58, 0.9)"
          : "rgba(14, 42, 58, 0.75)",
        borderBottom: "1px solid rgba(176, 224, 243, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2 flex justify-between items-center">
        {/* LOGO ORB AND BRANDING */}
        <div className="flex items-center gap-3">
          {/* Subtle Bronze Orb */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Main Orb with Bronze/Creamy Gradient */}
            <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] shadow-lg animate-subtle-orb-glow"></div>
            {/* Inner "core" that bounces - slightly toned down */}
            <div className="relative w-3.5 h-3.5 bg-white/80 rounded-full z-10 animate-bounce-subtle"></div>
            {/* Soft, subtle pulsating outer ring - using bronze color */}
            <div className="absolute inset-[-4px] rounded-full border-2 border-[#D2C1B6]/30 animate-pulse-border-subtle"></div>
          </div>

          <div className="flex flex-col">
            {/* Mohini Khatavkar - Signature Font (using Dancing Script as before) */}
            <span
              className="text-[#F3F8FC] text-2xl tracking-tight"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Mohini Khatavkar
            </span>
            {/* Domain Name */}
            <span className="text-[11px] text-[#A0ACB9] font-light">
              fitbharatmission.co.in
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ to, label }, idx) =>
            label === "Join Us" ? (
              // Join Us button with subtle bronze/creamy glow effect
              <Link
                key={idx}
                to={to}
                smooth
                className="relative group block"
              >
                {/* Subtle Glow for Join Us button */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-all duration-500 scale-100 group-hover:scale-105"></div>
                <span className="relative px-6 py-2 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] rounded-full shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold inline-flex items-center justify-center overflow-hidden">
                  {/* Shimmer effect for the button text - still white/transparent */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative">{label}</span>
                </span>
              </Link>
            ) : (
              // Contact & Reviews with subtle bronze/creamy hover effect
              <Link
                key={idx}
                to={to}
                smooth
                className="text-[#F3F8FC] hover:text-[#D2C1B6] transition duration-300 relative group text-base" // Changed hover text to bronze
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D2C1B6] group-hover:w-full transition-all duration-300 ease-out"></span> {/* Bronze underline */}
              </Link>
            )
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            className="text-[#B0E0F3]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-center space-y-3 bg-[#113D53] border-t border-white/10">
          {navLinks.map(({ to, label }, idx) => (
            <Link
              key={idx}
              to={to}
              smooth
              onClick={() => setMenuOpen(false)}
              className={`block py-2 ${
                label === "Join Us"
                  ? "bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] rounded-lg shadow-md font-semibold" // Bronze button for mobile
                  : "text-[#F3F8FC] hover:text-[#D2C1B6] font-medium" // Bronze hover for mobile
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        /* Import Google Font for Cursive */
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

        /* Custom Animations for Header Orb */
        @keyframes subtle-orb-glow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(210, 193, 182, 0.4), 0 0 16px rgba(249, 243, 239, 0.3);
            transform: scale(1);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 12px rgba(210, 193, 182, 0.6), 0 0 20px rgba(249, 243, 239, 0.4);
            transform: scale(1.03); /* More subtle scale */
            opacity: 0.9;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); } /* Even more subtle bounce */
        }

        @keyframes pulse-border-subtle {
            0%, 100% {
                transform: scale(1);
                opacity: 0.7; /* Reduced opacity for subtle border pulse */
            }
            50% {
                transform: scale(1.05); /* Less aggressive scale */
                opacity: 0.5; /* More transparency at peak */
            }
        }

        /* General Animations (if not already defined elsewhere) */
        @keyframes float-ethereal {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg) scale(1.1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) translateX(0px) rotate(180deg) scale(0.9);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-20px) translateX(-10px) rotate(270deg) scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-float-ethereal {
          animation: float-ethereal 12s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(27, 60, 83, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(210, 193, 182, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(210, 193, 182, 0.5);
        }
      `}</style>
    </header>
  );
}