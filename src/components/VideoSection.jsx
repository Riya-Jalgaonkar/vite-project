import React, { useState, useEffect } from "react";

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayVideo = () => {
    setShowPlayButton(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#ADEED9]/20 to-[#FFEDF3]/30">
        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? (
              // Leaf shape
              <div className="w-4 h-4 bg-[#0ABAB5] rounded-full relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#56DFCF] rounded-full"></div>
              </div>
            ) : i % 3 === 1 ? (
              // Sparkle
              <div className="w-2 h-2 bg-[#FF6B9D] rounded-full animate-pulse"></div>
            ) : (
              // Chakra/flower
              <div className="w-3 h-3 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left max-w-2xl flex-1 relative">
          {/* Floating Mohini Image */}
          <div className={`absolute -top-20 -right-10 lg:-right-20 w-24 h-24 lg:w-32 lg:h-32 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-[#0ABAB5] to-[#56DFCF] rounded-full shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-bold text-white">M</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B9D] rounded-full animate-ping"></div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#0ABAB5] bg-clip-text text-transparent animate-gradient">
                Your Healthier Life
              </span>
              <br />
              <span className="text-gray-800">Starts Here.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
              Meet Mohini. See how we change lives together.
            </p>
          </div>
        </div>

        {/* Right: Video Container */}
        <div className={`w-full lg:w-[600px] flex-1 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="relative group">
            <div className="bg-white/40 backdrop-blur-lg border border-white/50 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-3xl">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Intro Video"
                  allowFullScreen
                ></iframe>
                
                {/* Custom Play Button Overlay */}
                {showPlayButton && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/20 to-[#56DFCF]/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:from-[#0ABAB5]/30 hover:to-[#56DFCF]/30"
                    onClick={handlePlayVideo}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center animate-pulse">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full flex items-center justify-center">
                          {/* Leaf/Chakra Play Button */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white ml-1">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full opacity-30 animate-ping"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Floating decorative elements around video */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF6B9D] rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#56DFCF] rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
        <p className="text-sm text-gray-600 mb-2 font-medium">Watch. Then Join Us</p>
        <div className="w-8 h-8 mx-auto bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-full flex items-center justify-center animate-bounce">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}