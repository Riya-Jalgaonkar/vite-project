import React, { useState, useEffect, useRef } from 'react';
import TransformationCard from "./TransformationCard.jsx";

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
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  };

  // Mouse handlers for desktop
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Get the position style for each card
  const getCardStyle = (index) => {
    const position = (index - currentIndex + items.length) % items.length;
    const isCenter = position === 0;
    const isLeft = position === items.length - 1;
    const isRight = position === 1;

    if (isCenter) {
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (isLeft) {
      return {
        transform: 'translateX(-85%) translateZ(-200px) rotateY(35deg) scale(0.8)',
        zIndex: 20,
        opacity: 0.7,
      };
    } else if (isRight) {
      return {
        transform: 'translateX(85%) translateZ(-200px) rotateY(-35deg) scale(0.8)',
        zIndex: 20,
        opacity: 0.7,
      };
    } else {
      return {
        transform: 'translateX(0) translateZ(-400px) rotateY(0deg) scale(0.6)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <div
        ref={carouselRef}
        className="relative h-[400px] md:h-[500px] overflow-hidden perspective-1000"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1000px' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute top-0 left-1/2 w-[280px] md:w-[350px] h-[380px] md:h-[480px] transition-all duration-700 ease-out cursor-pointer"
            style={{
              marginLeft: '-140px', // Half of mobile width
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
                ? 'bg-[#0ABAB5] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Import your existing TransformationCard component
// import TransformationCard from "./TransformationCard.jsx";

// Updated TransformationSection component using your existing TransformationCard
// Replace the img1, img2, img3 imports with your actual image imports
const TransformationSection = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face', // Replace with img1
      name: "Hinal Patel",
      message: "Best experience ever, My life is all set thanks to Mohini Ben",
      journeyDuration: "3 Months Journey",
      badgeType: "transformation"
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', // Replace with img2
      name: "Ankita Shah",
      message: "From confused to confident — Mohini changed how I see food!",
      journeyDuration: "4 Months Journey",
      badgeType: "before-after"
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', // Replace with img3
      name: "Priya Mehta",
      message: "Her guidance helped me reset my body and mind ❤️",
      journeyDuration: "5 Months Journey",
      badgeType: "transformation"
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', // Replace with img1 again or add img4
      name: "Khushi Jain",
      message: "I feel lighter, happier and finally in control 🌸",
      journeyDuration: "6 Months Journey",
      badgeType: "before-after"
    }
  ];

  return (
    <section
      id="customers"
      className="py-20 px-4 bg-gradient-to-b from-[#FFEDF3] via-[#ADEED9] to-[#56DFCF] text-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Trust tag for large screens */}
        <div className="hidden md:block text-sm text-[#0ABAB5] font-semibold mb-2">
          Over <span className="text-pink-500">200+</span> journeys guided
        </div>

        <h2 className="text-4xl font-extrabold text-[#0ABAB5] mb-4 tracking-tight">
          Transformations That Inspire
        </h2>

        <p className="text-[#444] text-sm max-w-xl mx-auto mb-12 leading-relaxed">
          Real people. Real stories. Witness the beautiful journeys that unfolded with Mohini's gentle yet empowering guidance 🌿
        </p>

        <Carousel3D items={testimonials} autoPlaySpeed={5000} />
      </div>
    </section>
  );
};

export default TransformationSection;