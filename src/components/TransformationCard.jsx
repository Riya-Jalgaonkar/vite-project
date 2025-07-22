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

  return (
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
      {/* Main Card */}
      <div 
        className={`relative bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center space-y-4 sm:space-y-6 border border-white/50 transition-all duration-500 ease-out ${
          isHovered 
            ? 'shadow-2xl -translate-y-2 border-[#0ABAB5]/30' 
            : 'shadow-lg hover:shadow-xl'
        }`}
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 237, 243, 0.3) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(10, 171, 181, 0.25), 0 0 30px rgba(255, 107, 157, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Floating User Image */}
        <div className="relative -mt-8 sm:-mt-12">
          <div className="relative">
            {/* Glowing Gradient Ring */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#FF6B9D] p-1 transition-all duration-500 ${
              isHovered ? 'animate-pulse scale-110' : ''
            }`}>
              <div className="w-full h-full bg-white rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full"></div>
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
              
              {/* Floating Sparkles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6B9D] rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#56DFCF] rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] bg-clip-text text-transparent">
          {name || "Sarah Johnson"}
        </h3>

        {/* Quote */}
        <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="absolute -top-2 -left-2 text-2xl sm:text-3xl text-[#0ABAB5]/30 font-serif">"</div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 italic leading-relaxed px-4">
            {message || "This program changed my life completely. I feel more energized, confident, and healthy than ever before!"}
          </p>
          <div className="absolute -bottom-2 -right-2 text-2xl sm:text-3xl text-[#0ABAB5]/30 font-serif">"</div>
        </div>

        {/* Journey Duration Tag */}
        {showBadge && (
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4">
            <div className="bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              {journeyDuration}
            </div>
          </div>
        )}

        {/* Badge Icon */}
        {badgeType === "transformation" && (
          <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF6B9D] to-[#56DFCF] rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
            </svg>
          </div>
        )}

        {badgeType === "before-after" && (
          <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        )}

        {/* Floating Background Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#0ABAB5]/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#FF6B9D]/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0ABAB5]/10 to-[#FF6B9D]/10 transition-opacity duration-500 -z-10 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{ filter: 'blur(20px)' }}></div>
    </div>
  );
}

// Example usage component showing multiple cards
export function TestimonialCarousel() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b332446c?w=400&h=400&fit=crop&crop=face",
      name: "Sarah Johnson",
      message: "This program changed my life completely. I feel more energized, confident, and healthy than ever before!",
      journeyDuration: "3 Months Journey",
      badgeType: "transformation"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      name: "Michael Chen",
      message: "Amazing transformation! The support system and guidance made all the difference in my wellness journey.",
      journeyDuration: "6 Months Journey",
      badgeType: "before-after"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      name: "Emily Rodriguez",
      message: "I never thought I could feel this good about myself. The holistic approach really works!",
      journeyDuration: "4 Months Journey",
      badgeType: "transformation"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-[#FFEDF3]/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] bg-clip-text text-transparent">
          Transformation Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
              <TransformationCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}