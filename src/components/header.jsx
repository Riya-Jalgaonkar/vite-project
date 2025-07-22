import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/#joinus", label: "Join Us" },
    { to: "/#contact", label: "Contact" },
    { to: "/#customers", label: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-[#FFEDF3]/90 backdrop-blur-xl shadow-2xl py-2"
          : "bg-[#FFEDF3]/70 backdrop-blur-lg shadow-lg py-3"
      } border-b border-[#0ABAB5]/30`}
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: isScrolled
          ? "linear-gradient(135deg, rgba(255, 237, 243, 0.9) 0%, rgba(255, 237, 243, 0.85) 100%)"
          : "linear-gradient(135deg, rgba(255, 237, 243, 0.7) 0%, rgba(255, 237, 243, 0.6) 100%)",
        boxShadow: isScrolled
          ? "0 25px 50px -12px rgba(10, 171, 181, 0.25), 0 0 0 1px rgba(10, 171, 181, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
          : "0 20px 25px -5px rgba(10, 171, 181, 0.15), 0 10px 10px -5px rgba(10, 171, 181, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0ABAB5] to-[#56DFCF] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div
                className="w-4 h-4 bg-white rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B9D] rounded-full animate-ping"></div>
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg md:text-xl font-extrabold text-[#0ABAB5] tracking-tight bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] bg-clip-text text-transparent">
              Mohini Khatavkar
            </h1>
            <span className="text-[10px] md:text-[11px] text-gray-600 font-medium">
              fitbharatmission.co.in
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ to, label }, idx) =>
            label === "Join Us" ? (
              <Link
                key={idx}
                smooth
                to={to}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg group overflow-hidden"
              >
                <span className="relative z-10 font-semibold">{label}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#56DFCF] to-[#0ABAB5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <Link
                key={idx}
                smooth
                to={to}
                className="relative text-gray-700 hover:text-[#0ABAB5] transition-all duration-300 ease-out group"
              >
                <span className="relative z-10 inline-block hover:animate-bounce">{label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-[#0ABAB5] focus:outline-none"
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#0ABAB5]/20 shadow-md text-center py-4 space-y-3">
          {navLinks.map(({ to, label }, idx) => (
            <Link
              key={idx}
              smooth
              to={to}
              onClick={() => setMenuOpen(false)}
              className="block text-[#0ABAB5] font-medium hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
