import React, { useState, useEffect, useRef } from "react";

export default function TransformationCard({
  image,
  name,
  message,
  journeyDuration = "3 Months Journey",
  showBadge = true,
  badgeType = "transformation" // "transformation" or "before-after"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper styles for animations (matching JoinCommunitySection's)
  const floatStyle = (delay = 0) => ({
    animation: `float 6s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const pulseStyle = (delay = 0) => ({
    animation: `orbPulse 6s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const spinSlowStyle = {
    animation: `spin 8s linear infinite`
  };

  const sparkleStyle = (delay = 0) => ({
    animation: `sparkle 2s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); } /* Slightly less aggressive float for smaller elements */
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      <div
        ref={cardRef}
        className={`relative group transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Orbs & Material Elements around the card - Cream Palette */}
        <div
          className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] rounded-full shadow-lg opacity-60"
          style={floatStyle(0.5)}
        />
        <div
          className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#F9F3EF] rounded-full shadow-md opacity-70"
          style={pulseStyle(1.2)}
        />
        <div
          className="absolute top-1/4 -left-6 w-4 h-4 bg-[#D2C1B6] rounded-full shadow-sm opacity-50"
          style={floatStyle(2)}
        />
        <div
          className="absolute bottom-1/4 -right-6 w-8 h-8 border-2 border-[#D2C1B6] rounded-full opacity-40"
          style={spinSlowStyle}
        />
        <div
          className="absolute top-1/3 left-4 w-2 h-2 bg-[#F9F3EF] rounded-full"
          style={sparkleStyle(0.3)}
        />
        <div
          className="absolute bottom-1/3 right-4 w-3 h-3 bg-[#D2C1B6] rounded-full"
          style={sparkleStyle(0.8)}
        />

        {/* Main Card - No Glassmorphism, Enhanced 3D */}
        <div
          className={`relative bg-[#F9F3EF] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center space-y-4 sm:space-y-6 border border-[#D2C1B6]/30 transition-all duration-500 ease-out z-10
            ${isHovered
              ? 'shadow-2xl translate-y-[-8px] scale-[1.02] border-[#456882]/50' // More pronounced lift and shadow
              : 'shadow-lg hover:shadow-xl'
            }`}
          style={{
            background: isHovered
              ? 'linear-gradient(135deg, #F9F3EF 0%, #F1E8E0 100%)' // Softer gradient on hover
              : '#F9F3EF', // Solid background when not hovered
            boxShadow: isHovered
              ? '0 20px 40px -10px rgba(69, 104, 130, 0.3), 0 0 30px rgba(210, 193, 182, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)' // Deeper shadow
              : '0 10px 20px -5px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Floating User Image */}
          <div className="relative -mt-8 sm:-mt-12">
            <div className="relative">
              {/* Glowing Gradient Ring */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#456882] via-[#D2C1B6] to-[#F9F3EF] p-1 transition-all duration-500 ${
                isHovered ? 'animate-pulse scale-110' : ''
              }`}>
                <div className="w-full h-full bg-[#F9F3EF] rounded-full p-1"> {/* Changed inner ring to cream */}
                  <div className="w-full h-full bg-gradient-to-br from-[#F9F3EF] to-[#F1E8E0] rounded-full"></div> {/* Cream gradient for image border */}
                </div>
              </div>

              {/* Profile Image */}
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden transition-all duration-500 ${
                isHovered ? 'scale-105' : ''
              }`}>
                <img
                  src={image || "https://images.unsplash.com/photo-1494790108755-2616b332446c?w=400&h=400&fit=crop&crop=face"}
                  alt={`${name}'s transformation`}
                  className="w-full h-full object-cover"
                />

                {/* Floating Sparkles - Cream Palette */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F9F3EF] rounded-full animate-sparkle opacity-80" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#D2C1B6] rounded-full animate-sparkle opacity-80" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#1B3C53] to-[#456882] bg-clip-text text-transparent">
            {name || "Sarah Johnson"}
          </h3>

          {/* Quote */}
          <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="absolute -top-2 -left-2 text-2xl sm:text-3xl text-[#D2C1B6]/50 font-serif">"</div> {/* Lighter opacity */}
            <p className="text-sm sm:text-base lg:text-lg text-[#1B3C53] italic leading-relaxed px-4"> {/* Darker text for readability */}
              {message || "This program changed my life completely. I feel more energized, confident, and healthy than ever before!"}
            </p>
            <div className="absolute -bottom-2 -right-2 text-2xl sm:text-3xl text-[#D2C1B6]/50 font-serif">"</div> {/* Lighter opacity */}
          </div>

          {/* Journey Duration Tag */}
          {showBadge && (
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4">
              <div className="bg-gradient-to-r from-[#456882] to-[#D2C1B6] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                {journeyDuration}
              </div>
            </div>
          )}

          {/* Badge Icon */}
          {badgeType === "transformation" && (
            <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#1B3C53] sm:w-5 sm:h-5"> {/* Icon color from dark palette */}
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
              </svg>
            </div>
          )}

          {badgeType === "before-after" && (
            <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F9F3EF] sm:w-5 sm:h-5"> {/* Icon color from light palette */}
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          )}

          {/* Floating Background Elements - Cream Palette */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#F9F3EF]/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#D2C1B6]/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Glow Effect on Hover - Adjusted colors */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#456882]/10 to-[#D2C1B6]/10 transition-opacity duration-500 -z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} style={{ filter: 'blur(25px)' }}></div> {/* Slightly more blur */}
      </div>
    </>
  );
}