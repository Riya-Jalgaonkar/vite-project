import { useState, useEffect, useRef } from 'react';

export default function FormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', whatsapp: false });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const validatePhone = (phone) => /^\+91[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!validateEmail(formData.email)) {
      setMessage('Please enter a valid Gmail address.');
      setLoading(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setMessage('Please enter a valid phone number with +91 followed by 10 digits.');
      setLoading(false);
      return;
    }

    try {
      // Simulate form submission - replace with your Firebase/backend logic
      console.log('Form submitted:', formData);
      setMessage('Thank you for signing up! We\'ll be in touch soon.');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', whatsapp: false });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage('An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="joinus" 
      className="relative py-40 px-4 overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1c] via-[#1B3C53] to-[#0a0f1c]"
    >
      
      {/* Dark Atmospheric Background */}
      <div className="absolute inset-0">
        {/* Base dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#1B3C53]/80 to-[#0a0f1c]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#456882]/20 via-transparent to-[#0a0f1c]"></div>
        
        {/* Floating Luminous Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-ethereal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <div 
              className={`${
                i % 4 === 0 ? 'bg-gradient-to-br from-[#D2C1B6]/40 to-[#F9F3EF]/20' :
                i % 4 === 1 ? 'bg-gradient-to-br from-[#456882]/30 to-[#D2C1B6]/15' :
                i % 4 === 2 ? 'bg-gradient-to-br from-[#F9F3EF]/25 to-[#456882]/20' :
                'bg-gradient-to-br from-[#D2C1B6]/35 to-[#F9F3EF]/25'
              } rounded-full blur-sm opacity-60`}
              style={{
                width: `${8 + Math.random() * 24}px`,
                height: `${8 + Math.random() * 24}px`,
                boxShadow: `0 0 ${20 + Math.random() * 30}px rgba(242, 243, 239, 0.1)`
              }}
            ></div>
          </div>
        ))}

        {/* Large Ambient Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#456882]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#D2C1B6]/8 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#F9F3EF]/6 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Premium Form Container - Slides in from right */}
        <div
          className={`max-w-2xl mx-auto transform transition-all duration-[2500ms] ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0' 
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          
          {/* Ultra-Premium Glassmorphism Form */}
          {/* Added a subtle shadow/glow to the form container to help it blend with the background */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-14 shadow-2xl overflow-hidden
          before:content-[''] before:absolute before:inset-[-5px] before:rounded-[2rem] before:bg-white/5 before:blur-lg before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"> 
            
            {/* Inner Glass Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#D2C1B6]/5 via-transparent to-[#456882]/8 rounded-3xl"></div>
            
            {/* Subtle Inner Glow Effects - ensure these are slightly contained */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#F9F3EF]/8 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tl from-[#D2C1B6]/10 to-transparent rounded-full blur-xl"></div>
            
            {/* Premium Trust Badge */}
            <div 
              className={`absolute top-4 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-gradient-to-r from-[#D2C1B6]/20 to-[#F9F3EF]/15 border border-white/20 text-white px-8 py-3 text-sm font-medium rounded-full shadow-2xl transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <span className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1B3C53]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span className="bg-gradient-to-r from-[#F9F3EF] to-[#D2C1B6] bg-clip-text text-transparent font-semibold">
                  Trusted by 200+ women
                </span>
              </span>
            </div>

            <div className="relative z-10 mt-12"> 
              
              {/* Premium Header */}
              <div
                className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-[#F9F3EF] via-[#D2C1B6] to-[#F9F3EF] bg-clip-text text-transparent mb-2">
                    Transform Your Life
                  </span>
                  <span className="block text-2xl lg:text-3xl xl:text-4xl text-[#D2C1B6]/90 font-light">
                    Start Your Wellness Journey
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-[#F9F3EF]/80 font-light leading-relaxed max-w-lg mx-auto">
                  Join our exclusive program with personalized nutrition guidance and premium support
                  <span className="inline-block ml-2">✨</span>
                </p>
              </div>

              {/* Premium Form */}
              <form
                onSubmit={handleSubmit}
                className={`space-y-8 transform transition-all duration-1200 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#D2C1B6] mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]/50 focus:border-white/30 transition-all duration-500 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#D2C1B6] mb-3">Gmail Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]/50 focus:border-white/30 transition-all duration-500 text-lg"
                    />
                  </div>
                </div>

                {/* Phone and WhatsApp Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#D2C1B6] mb-3">Phone (with +91)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]/50 focus:border-white/30 transition-all duration-500 text-lg"
                    />
                  </div>

                  <div className="flex items-center justify-center lg:mt-12">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        name="whatsapp"
                        checked={formData.whatsapp}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`relative w-6 h-6 rounded-lg border-2 transition-all duration-500 group-hover:scale-110 ${
                        formData.whatsapp 
                          ? 'bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] border-[#D2C1B6] shadow-lg shadow-[#D2C1B6]/25' 
                          : 'bg-white/10 border-white/30 backdrop-blur-xl'
                      }`}>
                        {formData.whatsapp && (
                          <svg className="w-4 h-4 text-[#1B3C53] absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      <span className="ml-4 text-[#F9F3EF]/90 font-medium text-lg">Send updates on WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Premium Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-active:scale-[0.98] overflow-hidden text-lg lg:text-xl">
                      
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center gap-3">
                        {loading ? (
                          <>
                            <div className="w-6 h-6 border-3 border-[#1B3C53]/30 border-t-[#1B3C53] rounded-full animate-spin"></div>
                            <span>Processing Your Journey...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span>Begin Premium Transformation</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </span>
                    </div>
                  </button>
                </div>
              </form>

              {/* Success/Error Message */}
              {message && (
                <div
                  className={`mt-8 text-center transform transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className={`inline-block px-6 py-3 rounded-2xl backdrop-blur-xl border text-lg font-medium ${
                    message.includes('Thank you') 
                      ? 'text-[#D2C1B6] bg-[#D2C1B6]/10 border-[#D2C1B6]/20' 
                      : 'text-red-300 bg-red-500/10 border-red-500/20'
                  }`}>
                    {message}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
    </section>
  );
}