import React from "react";
import { Link } from "react-scroll";

export default function FooterSection() {
  return (
    <footer className="relative py-16 px-4 md:px-12 overflow-hidden bg-[#113D53]"> {/* Base dark blue background */}
      {/* Semi-transparent creamy/bronze overlay to mute the background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F9F3EF]/5 to-[#D2C1B6]/5 backdrop-blur-sm"></div>
      
      {/* Extremely Subtle Blue Orbs / Glows in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"> {/* Added pointer-events-none */}
        <div 
          className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-[#456882]/8 to-transparent rounded-full blur-3xl animate-pulse-slow-gentle" // Much lower opacity
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-5 right-20 w-36 h-36 bg-gradient-to-tl from-[#1B3C53]/6 to-transparent rounded-full blur-3xl animate-pulse-slow-gentle" // Much lower opacity
          style={{ animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-[#456882]/5 to-transparent rounded-full blur-2xl animate-pulse-slow-gentle" // Much lower opacity
          style={{ animationDelay: '5s' }}
        ></div>
        {/* Additional smaller, even more subtle orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-ethereal-super-subtle" // New animation for even subtler float
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 5}s`,
              width: `${5 + Math.random() * 8}px`, // Smaller size
              height: `${5 + Math.random() * 8}px`,
              background: i % 2 === 0 ? `radial-gradient(circle, #456882/10, transparent)` : `radial-gradient(circle, #1B3C53/8, transparent)`, // Much lower opacity
              borderRadius: '50%',
              filter: 'blur(2px)', // Less blur for tiny points of light
              opacity: 0.2 // Very low opacity
            }}
          ></div>
        ))}
      </div>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand and Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-[#F9F3EF]">Mohini Wellness</h3> {/* Lighter text for heading */}
          <p className="text-sm leading-relaxed text-[#D2C1B6]/80"> {/* Softer bronze text */}
            Personal Wellness Coach focusing on hormone healing, sustainable habits & holistic nourishment 🌿
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#F9F3EF]">Quick Links</h4> {/* Lighter text for heading */}
          <ul className="space-y-2 text-sm">
            {["home", "about", "services", "customers", "contact"].map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  className="text-[#D2C1B6] hover:text-[#F9F3EF] cursor-pointer transition-colors font-medium" // Bronze links, creamy hover
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#F9F3EF]">Get in Touch</h4> {/* Lighter text for heading */}
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-[#D2C1B6] mr-2">📩</span>{" "} {/* Bronze icon color */}
              <a
                href="mailto:contact@nutritionist.com"
                className="text-[#D2C1B6] hover:text-[#F9F3EF] transition-colors" // Bronze links, creamy hover
              >
                contact@nutritionist.com
              </a>
            </li>
            <li>
              <span className="text-[#D2C1B6] mr-2">📞</span>{" "} {/* Bronze icon color */}
              <a
                href="tel:+1234567890"
                className="text-[#D2C1B6] hover:text-[#F9F3EF] transition-colors" // Bronze links, creamy hover
              >
                +123 456 7890
              </a>
            </li>
            <li className="text-[#D2C1B6]"> {/* Bronze text */}
                <span className="mr-2">📍</span> India • Online Consultations
            </li>
          </ul>
        </div>

        {/* Socials and CTA */}
        <div className="flex flex-col items-start space-y-5">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#F9F3EF]">Follow Us</h4> {/* Lighter text for heading */}
            <div className="flex space-x-4">
              {[
                { href: "https://instagram.com/nutritionist", icon: "instagram.svg", alt: "Instagram" },
                { href: "https://facebook.com/nutritionist", icon: "facebook.svg", alt: "Facebook" },
                { href: "https://linkedin.com/in/nutritionist", icon: "linkedin.svg", alt: "LinkedIn" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group" // Very subtle white/transparent background for icons
                >
                  {/* Assuming these are SVG icons. If they are simple img tags, they'll need currentColor or an SVG component for hover color change */}
                  <img src={`images/${item.icon}`} alt={item.alt} className="h-6 w-6 text-[#D2C1B6] group-hover:text-[#F9F3EF] filter invert-0" />
                  {/* If your icons are SVGs and you can control their fill: */}
                  {/* <svg class="h-6 w-6 text-[#D2C1B6] group-hover:text-[#F9F3EF]" fill="currentColor" viewBox="0 0 24 24">...</svg> */}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Me Button - Muted creamy button with subtle bronze glow */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative group block"
          >
            {/* Subtle glow for Contact Me button */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6]/10 to-[#F9F3EF]/10 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-500 scale-100 group-hover:scale-105"></div>
            <span className="relative px-6 py-3 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] rounded-full shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold inline-flex items-center justify-center overflow-hidden text-base">
              {/* Shimmer effect for the button text - using a subtle white shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative">Contact Me</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-12 text-center text-xs text-[#D2C1B6]/60"> {/* Very muted bronze for copyright */}
        © 2025 Mohini Wellness. All Rights Reserved.
      </div>

      <style jsx>{`
        /* Custom Animations for Footer Orbs - adapted for extreme subtlety */
        @keyframes pulse-slow-gentle {
          0%, 100% {
            opacity: 0.2; /* Very low opacity */
            transform: scale(1);
          }
          50% {
            opacity: 0.3; /* Slightly higher but still low */
            transform: scale(1.02); /* Very subtle scale */
          }
        }
        .animate-pulse-slow-gentle {
          animation: pulse-slow-gentle 6s ease-in-out infinite;
        }

        @keyframes float-ethereal-super-subtle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.15; /* Extremely low opacity */
          }
          25% {
            transform: translateY(-3px) translateX(2px);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-5px) translateX(0px);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-3px) translateX(-2px);
            opacity: 0.28;
          }
        }
        .animate-float-ethereal-super-subtle {
          animation: float-ethereal-super-subtle 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}