import React, { useState, useEffect, useRef } from 'react';
import TransformationCard from "./TransformationCard.jsx"; // Ensure this path is correct

const Carousel3D = ({ items, autoPlaySpeed = 4000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [items.length, autoPlaySpeed, isAutoPlaying]);

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    setIsAutoPlaying(false); // Pause auto-play on touch
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsAutoPlaying(true); // Resume auto-play after touch
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) { // Swipe left - next
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (distance < -50) { // Swipe right - previous
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  };

  // Mouse handlers for desktop
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Get the position style for each card
  const getCardStyle = (index) => {
    const totalItems = items.length;
    let position = (index - currentIndex + totalItems) % totalItems; // Relative position
    
    // Normalize position to be -1, 0, or 1 for visible cards
    // This logic ensures only 3 cards are ever considered "active" for display
    if (position > 1 && position < totalItems - 1) {
      // If position is beyond the immediate neighbors and not the wrap-around left
      position = 999; // A large number to make it effectively hidden
    } else if (position === totalItems - 1) { // If it's the last card and wraps around to be left of current
        position = -1;
    }

    const cardWidth = 350; // md:w-[350px]
    const cardHeight = 480; // md:h-[480px]

    // Base styles for all cards to ensure consistent sizing
    const baseCardStyles = {
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        left: '50%', // Anchor from center
        top: '50%',
        marginTop: `-${cardHeight / 2}px`, // Vertically center the card
        pointerEvents: 'auto', // Default to auto, overridden to 'none' for hidden
    };

    if (position === 0) { // Center card
      return {
        ...baseCardStyles,
        transform: `translateX(-50%) translateZ(0) rotateY(0deg) scale(1)`,
        zIndex: 30,
        opacity: 1,
      };
    } else if (position === 1) { // Right card
      return {
        ...baseCardStyles,
        transform: `translateX(25%) translateZ(-150px) rotateY(-15deg) scale(0.9)`, // Adjusted for 3-card layout
        zIndex: 20,
        opacity: 0.8,
      };
    } else if (position === -1) { // Left card
      return {
        ...baseCardStyles,
        transform: `translateX(-125%) translateZ(-150px) rotateY(15deg) scale(0.9)`, // Adjusted for 3-card layout
        zIndex: 20,
        opacity: 0.8,
      };
    } else { // Hidden cards
      return {
        ...baseCardStyles,
        transform: `translateX(-50%) translateZ(-1000px) scale(0.6)`, // Push further back and completely hide
        zIndex: 10,
        opacity: 0,
        pointerEvents: 'none', // Disable interaction
      };
    }
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <div
        ref={carouselRef}
        className="relative h-[450px] md:h-[550px] overflow-hidden" // Increased height for more space
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1200px' }} // Increased perspective for better 3D
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-out cursor-pointer" // Removed fixed width/height classes, set via style
            style={{
              ...getCardStyle(index),
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <TransformationCard {...item} />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#D2C1B6] scale-125' // Adjusted color
                : 'bg-[#456882] hover:bg-[#F9F3EF]' // Adjusted colors
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const TransformationSection = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      name: "Hinal Patel",
      message: "Best experience ever, My life is all set thanks to Mohini Ben",
      journeyDuration: "3 Months Journey",
      badgeType: "transformation"
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      name: "Ankita Shah",
      message: "From confused to confident — Mohini changed how I see food!",
      journeyDuration: "4 Months Journey",
      badgeType: "before-after"
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      name: "Priya Mehta",
      message: "Her guidance helped me reset my body and mind ❤️",
      journeyDuration: "5 Months Journey",
      badgeType: "transformation"
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      name: "Khushi Jain",
      message: "I feel lighter, happier and finally in control 🌸",
      journeyDuration: "6 Months Journey",
      badgeType: "before-after"
    }
  ];

  // Helper styles for animations (matching JoinCommunitySection's)
  const orbFloatStyle = (delay = 0, duration = 10) => ({
    animation: `orbFloat ${duration}s ease-in-out infinite`,
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

  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
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
      `}</style>
      <section
        id="customers"
        // Seamless background: starts from the end color of the previous section
        className="relative pt-0 pb-20 px-4 bg-gradient-to-b from-[#172A3A] via-[#1B3C53] to-[#172A3A] text-center overflow-hidden"
      >
        {/* Floating Orbs with Color Palette from JoinCommunitySection */}
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

          {/* Additional floating chakra elements - for visual consistency (Cream Palette) */}
          {[...Array(10)].map((_, i) => ( // Fewer than the other section to avoid clutter
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                ...floatStyle(Math.random() * 6)
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-3 h-6 bg-[#D2C1B6] rounded-full transform rotate-45 relative">
                  <div className="absolute -top-1 -left-1 w-2 h-4 bg-[#F9F3EF] rounded-full opacity-60"></div>
                </div>
              ) : i % 3 === 1 ? (
                <div className="w-2 h-2 bg-[#F9F3EF] rounded-full" style={twinkleStyle(i)}></div>
              ) : (
                <div className="w-4 h-4 border-2 border-[#D2C1B6] rounded-full" style={spinSlowStyle}></div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10"> {/* Ensure content is above orbs */}
          {/* Trust tag for large screens */}
          <div className="hidden md:block text-sm text-[#F9F3EF] font-semibold mb-2">
            Over <span className="text-[#D2C1B6]">200+</span> journeys guided
          </div>

          <h2 className="text-4xl font-extrabold text-[#F9F3EF] mb-4 tracking-tight">
            Transformations That Inspire
          </h2>

          <p className="text-[#D2C1B6] text-sm max-w-xl mx-auto mb-12 leading-relaxed">
            Real people. Real stories. Witness the beautiful journeys that unfolded with Mohini's gentle yet empowering guidance 🌿
          </p>

          <Carousel3D items={testimonials} autoPlaySpeed={5000} />
        </div>
      </section>
    </>
  );
};

export default TransformationSection;