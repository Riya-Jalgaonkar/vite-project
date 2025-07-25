import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative min-h-screen bg-[#1B3C53] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Soft background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#456882] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-72 h-72 bg-[#D2C1B6] rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#456882] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating chakra elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 ? (
              // Leaf/petal shape
              <div className="w-3 h-6 bg-[#D2C1B6] rounded-full transform rotate-45 relative">
                <div className="absolute -top-1 -left-1 w-2 h-4 bg-[#456882] rounded-full opacity-60"></div>
              </div>
            ) : i % 4 === 1 ? (
              // Sparkle/star
              <div className="w-2 h-2 bg-[#F9F3EF] rounded-full animate-twinkle"></div>
            ) : i % 4 === 2 ? (
              // Chakra circle
              <div className="w-4 h-4 border-2 border-[#D2C1B6] rounded-full animate-spin-slow"></div>
            ) : (
              // Orb
              <div className="w-3 h-3 bg-gradient-to-br from-[#456882] to-[#D2C1B6] rounded-full shadow-lg"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Headline with staggered animation */}
            <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#F9F3EF] leading-tight font-serif">
                Your Journey to
                <span className="block bg-gradient-to-r from-[#D2C1B6] via-[#F9F3EF] to-[#D2C1B6] bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Holistic Wellness
                </span>
                <span className="block text-[#456882]">Begins Here</span>
              </h1>
            </div>

            {/* Subtext */}
            <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <p className="text-xl lg:text-2xl text-[#D2C1B6] font-light leading-relaxed max-w-lg">
                Guided by <span className="text-[#F9F3EF] font-medium">Mohini</span> – certified nutritionist with 15+ years of expertise. 
                <span className="block mt-2 text-lg">Personalized care. Proven results. Lasting transformation.</span>
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full text-[#F9F3EF] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6] to-[#456882] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <div className="w-2 h-2 bg-[#F9F3EF] rounded-full animate-bounce"></div>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-[#D2C1B6] rounded-full text-[#D2C1B6] font-semibold text-lg transition-all duration-300 hover:bg-[#D2C1B6] hover:text-[#1B3C53] hover:scale-105 transform active:scale-95">
                <span className="flex items-center justify-center gap-2">
                  Explore My Approach
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right: Visual Focus with Mohini's Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className={`transform transition-all duration-1200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              
              {/* Main Image Container */}
              <div className="relative">
                {/* Mohini's Image Placeholder */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full shadow-2xl flex items-center justify-center animate-float-gentle">
                    <div className="w-5/6 h-5/6 bg-[#F9F3EF] rounded-full flex items-center justify-center shadow-inner">
                      <div className="text-center">
                        <div className="text-6xl lg:text-7xl font-bold text-[#456882] mb-2">M</div>
                        <div className="text-sm text-[#456882] font-medium">Mohini</div>
                        <div className="text-xs text-[#456882] opacity-75">Certified Nutritionist</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating orbs around image */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#456882] to-[#D2C1B6] rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#D2C1B6] rounded-full shadow-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[#F9F3EF] rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute bottom-1/4 -right-8 w-10 h-10 border-2 border-[#D2C1B6] rounded-full animate-spin-slow"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 container mx-auto px-6 pb-24">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          
          {/* Video Container */}
          <div className="relative group">
            <div className="bg-[#456882]/20 backdrop-blur-lg border border-[#D2C1B6]/30 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              <div className="relative w-full aspect-video">
                {!showVideo ? (
                  // Video Thumbnail with Play Button
                  <div className="absolute inset-0 bg-gradient-to-br from-[#456882]/40 to-[#D2C1B6]/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#F9F3EF] mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">Meet Mohini</h3>
                        <p className="text-lg opacity-90">Discover her holistic approach to nutrition</p>
                      </div>
                      
                      {/* Custom Play Button */}
                      <button 
                        className="relative group/play"
                        onClick={handlePlayVideo}
                      >
                        <div className="w-20 h-20 bg-[#F9F3EF]/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center animate-pulse group-hover/play:animate-none transition-all duration-300 group-hover/play:scale-110">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#F9F3EF] ml-1">
                              <path d="M8 5v14l11-7z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full opacity-30 animate-ping"></div>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Actual Video Embed
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Mohini's Introduction Video"
                    allowFullScreen
                    allow="autoplay"
                  ></iframe>
                )}
              </div>
            </div>
            
            {/* Floating decorative elements around video */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#D2C1B6] rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-[#456882] rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-[#F9F3EF] rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
        <p className="text-sm text-[#D2C1B6] mb-3 font-medium">Begin Your Transformation</p>
        <div className="w-8 h-8 mx-auto bg-gradient-to-r from-[#456882] to-[#D2C1B6] rounded-full flex items-center justify-center animate-bounce cursor-pointer hover:scale-110 transition-transform">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F9F3EF]">
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(1.05); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}