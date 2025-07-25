import React, { useEffect, useRef, useState } from "react";

export default function JoinCommunitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const formRef = useRef(null);
  const testimonialsRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const createObserver = (setVisible, threshold = 0.2) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold }
      );
    };

    const formObserver = createObserver(setIsVisible, 0.2);
    const testimonialsObserver = createObserver(setTestimonialsVisible, 0.1);
    const headerObserver = createObserver(setHeaderVisible, 0.3);

    if (formRef.current) formObserver.observe(formRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (headerRef.current) headerObserver.observe(headerRef.current);
    
    return () => {
      formObserver.disconnect();
      testimonialsObserver.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Nutritionist",
      image: "👩‍⚕️",
      quote: "Mohini's holistic approach to nutrition has transformed how I guide my patients. Her deep understanding of mind-body connection is extraordinary."
    },
    {
      name: "Marcus Rodriguez",
      role: "Wellness Coach",
      image: "👨‍💼",
      quote: "Working alongside Mohini has been inspiring. Her ability to create personalized wellness plans that actually work is unmatched in our field."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Integrative Medicine",
      image: "👩‍🔬",
      quote: "Mohini combines ancient wisdom with modern science beautifully. Her clients achieve lasting transformation, not just temporary results."
    }
  ];

  const orbFloatStyle = (delay = 0, duration = 10) => ({
    animation: `orbFloat ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const pulseStyle = (delay = 0) => ({
    animation: `orbPulse 6s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const floatStyle = (delay = 0) => ({
    animation: `float 6s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const twinkleStyle = (delay = 0) => ({
    animation: `twinkle 3s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const spinSlowStyle = {
    animation: `spin 8s linear infinite`
  };

  const buttonGlowStyle = {
    animation: `pulse 3s ease-in-out infinite`
  };

  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes orbPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.05); }
        }

        .button-glow {
            animation: pulse 3s ease-in-out infinite;
        }

        .gradient-bg {
            background-image: linear-gradient(to right, #456882, #D2C1B6);
        }

        .pulse-orb {
            animation: orbPulse 6s ease-in-out infinite;
        }

        .glass-morphism {
            background: rgba(249, 243, 239, 0.08);
            backdrop-filter: blur(20px);
        }

        /* New styles for curved 3D dropdowns */
        .curved-dropdown {
          border-radius: 9999px; /* This makes it fully rounded/pill-shaped */
          padding: 0.75rem 1.25rem; /* Adjusted padding for better look with curved edges */
          appearance: none; /* Remove default system dropdown arrow */
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23D2C1B6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e"); /* Custom SVG for dropdown arrow */
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1em; /* Adjust size of custom arrow */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* Initial subtle shadow */
          transition: all 0.3s ease-in-out; /* Smooth transition for all changes */
        }

        .curved-dropdown:focus {
          box-shadow: 0 0 0 3px rgba(210, 193, 182, 0.5), 0 8px 15px rgba(0, 0, 0, 0.2); /* Enhanced shadow on focus for 3D pop */
          transform: translateY(-1px); /* Slight lift on focus */
          border-color: #D2C1B6; /* Highlight border on focus */
        }

        .curved-dropdown option {
          border-radius: 0; /* Options themselves don't support border-radius directly */
          background-color: #1B3C53; /* Ensure consistent background for options */
          color: #F9F3EF; /* Ensure consistent text color for options */
        }
      `}</style>

      <section
        id="join-community"
        className="relative bg-gradient-to-b from-[#1B3C53] to-[#172A3A] text-white overflow-hidden py-24 px-6 md:px-20 lg:px-32"
      >
        {/* Enhanced Floating Orbs with Color Palette */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute w-20 h-20 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full blur-2xl opacity-40 top-16 left-8" 
            style={orbFloatStyle(0, 10)}
          />
          <div 
            className="absolute w-16 h-16 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] rounded-full blur-xl opacity-30 top-32 right-20" 
            style={orbFloatStyle(2, 12)}
          />
          <div 
            className="absolute w-12 h-12 bg-gradient-to-r from-[#F9F3EF] to-[#D2C1B6] rounded-full blur-2xl opacity-35 bottom-40 left-16" 
            style={orbFloatStyle(4, 8)}
          />
          <div 
            className="absolute w-24 h-24 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full blur-3xl opacity-25 bottom-20 right-12" 
            style={orbFloatStyle(1, 14)}
          />
          <div 
            className="absolute w-14 h-14 bg-gradient-to-r from-[#D2C1B6] to-[#456882] rounded-full blur-xl opacity-40 top-1/2 left-1/3" 
            style={orbFloatStyle(3, 11)}
          />
          <div 
            className="absolute w-10 h-10 bg-gradient-to-r from-[#F9F3EF] to-[#456882] rounded-full blur-2xl opacity-30 top-3/4 right-1/3" 
            style={orbFloatStyle(0, 10)}
          />

          {/* Additional floating chakra elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                ...floatStyle(Math.random() * 6)
              }}
            >
              {i % 4 === 0 ? (
                <div className="w-3 h-6 bg-[#D2C1B6] rounded-full transform rotate-45 relative">
                  <div className="absolute -top-1 -left-1 w-2 h-4 bg-[#456882] rounded-full opacity-60"></div>
                </div>
              ) : i % 4 === 1 ? (
                <div className="w-2 h-2 bg-[#F9F3EF] rounded-full" style={twinkleStyle(i)}></div>
              ) : i % 4 === 2 ? (
                <div className="w-4 h-4 border-2 border-[#D2C1B6] rounded-full" style={spinSlowStyle}></div>
              ) : (
                <div className="w-3 h-3 bg-gradient-to-br from-[#456882] to-[#D2C1B6] rounded-full shadow-lg"></div>
              )}
            </div>
          ))}
        </div>

        {/* Text Block with Scroll Animation */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 text-[#F9F3EF]">
            Become a Part of the Holistic Wellness Tribe
          </h2>
          <p className="text-base sm:text-lg text-[#D2C1B6] max-w-2xl mx-auto">
            Get exclusive tips, personalized insights, and member-only guidance directly from Mohini. Your transformation journey deserves this support.
          </p>
        </div>

        {/* Enhanced Testimonials Section - Above Form */}
        <div
          ref={testimonialsRef}
          className={`mb-16 max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center text-[#F9F3EF]">What Healthcare Professionals Say</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`relative group transform transition-all duration-700 hover:-translate-y-2 hover:scale-105 ${
                  testimonialsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Floating orbs around testimonial card */}
                <div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#456882] to-[#D2C1B6] rounded-full shadow-lg" 
                  style={floatStyle(1)}
                />
                <div 
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#D2C1B6] rounded-full shadow-lg" 
                  style={floatStyle(2)}
                />
                <div 
                  className="absolute top-1/4 -left-8 w-6 h-6 bg-[#F9F3EF] rounded-full shadow-lg" 
                  style={pulseStyle(0)}
                />
                <div 
                  className="absolute bottom-1/4 -right-8 w-10 h-10 border-2 border-[#D2C1B6] rounded-full" 
                  style={spinSlowStyle}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-2xl opacity-20 blur-xl" 
                  style={pulseStyle(0)}
                />

                {/* 3D Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9F3EF] to-[#D2C1B6] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform shadow-2xl" />
                <div className="relative bg-gradient-to-br from-[#F9F3EF] to-[#F1E8E0] text-[#1B3C53] p-8 rounded-2xl shadow-2xl border border-[#D2C1B6]/20">
                  {/* Floating avatar */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div 
                      className="w-12 h-12 bg-gradient-to-br from-[#1B3C53] to-[#456882] rounded-full flex items-center justify-center text-2xl shadow-xl"
                      style={pulseStyle(0)}
                    >
                      {testimonial.image}
                    </div>
                  </div>
                  
                  <div className="pt-8 space-y-4">
                    <p className="text-sm italic leading-relaxed font-medium text-[#1B3C53]">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-[#456882]/20 pt-4">
                      <div className="font-bold text-[#1B3C53]">{testimonial.name}</div>
                      <div className="text-xs text-[#456882] font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#D2C1B6]/5 rounded-2xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Form Block */}
        <div
          ref={formRef}
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Glowing background orbs behind form */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute w-32 h-32 gradient-bg rounded-full blur-3xl opacity-20 -top-8 -left-8 pulse-orb" />
              <div className="absolute w-24 h-24 gradient-bg rounded-full blur-2xl opacity-30 -bottom-6 -right-6 pulse-orb" style={{ animationDelay: '2s' }} />
              <div className="absolute w-20 h-20 gradient-bg rounded-full blur-2xl opacity-25 top-1/2 -left-10 pulse-orb" style={{ animationDelay: '4s' }} />
            </div>

            {/* Glass Morphism Form */}
            <div className="relative glass-morphism p-8 rounded-2xl shadow-2xl text-white space-y-6 backdrop-blur-xl border border-[#D2C1B6]/20 overflow-visible">
              {/* Form glow effect that extends beyond the form */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#456882]/10 via-[#D2C1B6]/5 to-[#F9F3EF]/10 rounded-3xl pointer-events-none blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D2C1B6]/5 via-transparent to-[#456882]/5 rounded-2xl pointer-events-none" />
              
              <div className="grid gap-6 md:grid-cols-2 relative z-10">
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-[#F9F3EF]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="p-3 rounded-lg border border-[#D2C1B6]/30 bg-[#F9F3EF]/10 backdrop-blur-sm text-[#F9F3EF] placeholder-[#D2C1B6] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-[#F9F3EF]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="p-3 rounded-lg border border-[#D2C1B6]/30 bg-[#F9F3EF]/10 backdrop-blur-sm text-[#F9F3EF] placeholder-[#D2C1B6] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-[#F9F3EF]">
                    Wellness Goal
                  </label>
                  <select
                    className="curved-dropdown border border-[#D2C1B6]/30 bg-[#F9F3EF]/10 backdrop-blur-sm text-[#F9F3EF] focus:outline-none focus:border-transparent"
                  >
                    <option value="" className="bg-[#1B3C53] text-[#F9F3EF]">Select a goal</option>
                    <option value="weight-loss" className="bg-[#1B3C53] text-[#F9F3EF]">Weight Loss</option>
                    <option value="muscle-gain" className="bg-[#1B3C53] text-[#F9F3EF]">Muscle Gain</option>
                    <option value="energy" className="bg-[#1B3C53] text-[#F9F3EF]">Boost Energy</option>
                    <option value="overall-health" className="bg-[#1B3C53] text-[#F9F3EF]">Overall Health</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-[#F9F3EF]">
                    Fitness Level
                  </label>
                  <select
                    className="curved-dropdown border border-[#D2C1B6]/30 bg-[#F9F3EF]/10 backdrop-blur-sm text-[#F9F3EF] focus:outline-none focus:border-transparent"
                  >
                    <option value="" className="bg-[#1B3C53] text-[#F9F3EF]">Select level</option>
                    <option value="beginner" className="bg-[#1B3C53] text-[#F9F3EF]">Beginner</option>
                    <option value="intermediate" className="bg-[#1B3C53] text-[#F9F3EF]">Intermediate</option>
                    <option value="advanced" className="bg-[#1B3C53] text-[#F9F3EF]">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Enhanced Button with Glow Effect */}
              <div className="relative mt-8">
                {/* Button glow that extends beyond form */}
                <div 
                  className="absolute -inset-8 bg-gradient-to-r from-[#456882]/20 via-[#D2C1B6]/30 to-[#456882]/20 rounded-full blur-2xl button-glow pointer-events-none" 
                  style={buttonGlowStyle}
                />
                
                <button
                  className="relative w-full py-4 text-[#1B3C53] font-bold bg-gradient-to-r from-[#D2C1B6] via-[#F9F3EF] to-[#D2C1B6] rounded-full hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 shadow-xl overflow-hidden group cursor-pointer border-2 border-[#456882]/20"
                  onClick={() => alert('Form submitted! (Demo only)')}
                >
                  <span className="relative z-10">Join Now – It's Free!</span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#456882] to-[#1B3C53] opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-[#F9F3EF] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Join Now – It's Free!
                  </span>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-2 right-4 w-2 h-2 bg-[#F9F3EF] rounded-full twinkle opacity-60"></div>
                  <div className="absolute bottom-3 left-8 w-1 h-1 bg-[#456882] rounded-full twinkle opacity-80" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-3 left-1/3 w-1.5 h-1.5 bg-[#D2C1B6] rounded-full twinkle opacity-70" style={{ animationDelay: '2s' }}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}