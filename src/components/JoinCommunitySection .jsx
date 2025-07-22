import { useState, useEffect, useCallback } from "react";
import React from "react";

// Constants for better maintainability
const COMMUNITY_FEATURES = [
  {
    icon: "👥",
    title: "Expert Network",
    description: "Connect with wellness professionals, certified coaches, and industry leaders",
    gradient: "from-white/90 to-[#ADEED9]/20"
  },
  {
    icon: "🎓",
    title: "Learning Hub",
    description: "Access exclusive workshops, masterclasses, and evidence-based wellness content",
    gradient: "from-[#ADEED9]/20 to-[#FFEDF3]/30"
  },
  {
    icon: "🏆",
    title: "Achievement System",
    description: "Track your progress, earn certifications, and celebrate wellness milestones",
    gradient: "from-[#FFEDF3]/30 to-white/90"
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "Get guidance from our community moderators and peer support network",
    gradient: "from-white/90 to-[#56DFCF]/20"
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Sarah Chen",
    role: "Wellness Coach",
    content: "This community transformed my approach to holistic wellness. The network is incredible.",
    avatar: "👩‍⚕️"
  },
  {
    name: "Michael Rodriguez",
    role: "Fitness Professional",
    content: "Best investment I've made in my wellness journey. The support is unmatched.",
    avatar: "👨‍💼"
  },
  {
    name: "Emma Thompson",
    role: "Nutritionist",
    content: "The learning resources and community connection have elevated my practice significantly.",
    avatar: "👩‍🔬"
  }
];

const JOIN_FORM_FIELDS = [
  { field: "fullName", label: "Full Name", placeholder: "Enter your full name", type: "text", required: true },
  { field: "email", label: "Email Address", placeholder: "your.email@example.com", type: "email", required: true },
  { field: "profession", label: "Profession", placeholder: "Your current profession", type: "text", required: true },
  { field: "experience", label: "Experience Level", placeholder: "Beginner, Intermediate, Advanced", type: "select", required: true },
  { field: "interests", label: "Wellness Interests", placeholder: "What aspects of wellness interest you most?", type: "textarea", required: false }
];

const EXPERIENCE_OPTIONS = [
  { value: "", label: "Select your experience level" },
  { value: "beginner", label: "Beginner - New to wellness" },
  { value: "intermediate", label: "Intermediate - Some experience" },
  { value: "advanced", label: "Advanced - Experienced practitioner" },
  { value: "expert", label: "Expert - Professional in the field" }
];

export default function JoinCommunitySection() {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "", 
    profession: "", 
    experience: "", 
    interests: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animate section on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  }, [formErrors]);

  const validateForm = useCallback(() => {
    const errors = {};
    
    JOIN_FORM_FIELDS.forEach(({ field, required }) => {
      if (required && !formData[field].trim()) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    return errors;
  }, [formData]);

  const handleSubmit = useCallback(async () => {
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setShowJoinForm(false);
    setShowSuccess(true);
  }, [validateForm]);

  const handleCloseForm = useCallback(() => {
    setShowJoinForm(false);
    setFormErrors({});
  }, []);

  const handleKeyPress = useCallback((e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  }, []);

  // Optimized floating elements
  const FloatingCommunityElements = React.memo(() => {
    if (prefersReducedMotion) return null;
    
    const elements = [];
    const communityShapes = ['🌟', '✨', '💫', '🌙', '☀️', '🌸'];
    
    for (let i = 0; i < 6; i++) {
      elements.push(
        <div
          key={i}
          className="absolute animate-gentle-float opacity-20 text-lg pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${6 + Math.random() * 3}s`
          }}
          aria-hidden="true"
        >
          {communityShapes[Math.floor(Math.random() * communityShapes.length)]}
        </div>
      );
    }
    return <>{elements}</>;
  });

  return (
    <div className="relative min-h-screen overflow-hidden font-['Inter']">
      {/* Background with organic gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDF3]/30 via-white to-[#ADEED9]/20"></div>
        
        {/* Layered organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Wave dividers */}
          <svg className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 text-[#0ABAB5]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 C300,80 900,40 1200,60 L1200,0 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
          
          <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 text-[#56DFCF]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,120 C300,40 900,80 1200,60 L1200,120 Z" fill="currentColor" opacity="0.15"></path>
          </svg>
          
          {/* Organic blob shapes */}
          <div className="absolute top-8 right-8 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-[#0ABAB5]/6 to-[#56DFCF]/4 rounded-full opacity-40 blur-2xl animate-gentle-pulse" aria-hidden="true"></div>
          <div className="absolute bottom-20 left-8 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-br from-[#FFEDF3]/12 to-[#ADEED9]/8 rounded-full opacity-30 blur-xl animate-gentle-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCommunityElements />
      </div>

      {/* Success celebration overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
          <div className="bg-white/98 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#0ABAB5] animate-scale-in max-w-sm mx-auto">
            <div className="text-center relative z-10">
              <div className="text-4xl sm:text-5xl mb-4" role="img" aria-label="Welcome">🎉</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0ABAB5] mb-2">Welcome to the Community!</h3>
              <p className="text-gray-700 mb-4">Check your email for next steps...</p>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0ABAB5]" role="status" aria-label="Loading"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header Section */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${showJoinForm ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-none scale-100'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0ABAB5] mb-4 sm:mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#0ABAB5] bg-clip-text text-transparent">
                Wellness Community
              </span>
            </h2>
            
            {/* Organic divider */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <svg width="120" height="20" viewBox="0 0 120 20" className="text-[#0ABAB5]/40 w-24 sm:w-32 md:w-36" aria-hidden="true">
                <path d="M0,10 Q30,0 60,10 T120,10" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <circle cx="60" cy="10" r="2" fill="currentColor"></circle>
              </svg>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Connect with like-minded professionals, access exclusive resources, and accelerate your wellness journey through 
              <span className="text-[#0ABAB5] font-semibold"> collaborative learning</span> and peer support.
            </p>
          </div>

          {/* Community Features Grid */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${showJoinForm ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-none scale-100'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {COMMUNITY_FEATURES.map((feature, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#0ABAB5]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full`}>
                  <div className="text-3xl sm:text-4xl mb-4" role="img" aria-label={feature.title}>{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0ABAB5] mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${showJoinForm ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-none scale-100'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0ABAB5] text-center mb-8 sm:mb-12">What Our Community Says</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-[#0ABAB5]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4" role="img" aria-label="Avatar">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-[#0ABAB5] text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-400 ${showJoinForm ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-none scale-100'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 max-w-2xl mx-auto border border-[#0ABAB5]/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0ABAB5] mb-4">Ready to Transform Your Wellness Journey?</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">Join thousands of professionals who are already part of our thriving wellness community.</p>
              
              {!showJoinForm && (
                <button
                  onClick={() => setShowJoinForm(true)}
                  onKeyPress={(e) => handleKeyPress(e, () => setShowJoinForm(true))}
                  className="bg-[#0ABAB5] hover:bg-[#08918d] text-white text-base sm:text-lg font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-[#0ABAB5]/20 focus:outline-none focus:ring-2 focus:ring-[#0ABAB5] focus:ring-offset-2"
                  aria-label="Join our wellness community"
                  tabIndex={0}
                >
                  Join the Community
                </button>
              )}
            </div>
          </div>
          </div>
        </div>

          {/* Join Form Modal */}
          {showJoinForm && (
  <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
      
      {/* Soft floating decoration */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FFEDF3]/40 to-[#ADEED9]/30 rounded-full blur-2xl opacity-40 animate-gentle-float pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-[#0ABAB5]/20 to-[#56DFCF]/10 rounded-full blur-xl opacity-30 animate-gentle-float pointer-events-none"></div>

      {/* Glowing gradient wrapper */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-[#ADEED9] via-white to-[#FFEDF3] shadow-2xl">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8">
          
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-transparent bg-clip-text flex items-center justify-center gap-2">
              📝 Join the Wellness Circle
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-2">
              Tell us a bit about yourself to get started
            </p>
            <div className="flex justify-center mt-4">
              <svg width="80" height="8" viewBox="0 0 80 8" className="text-[#0ABAB5]/30" aria-hidden="true">
                <path d="M0,4 Q20,0 40,4 T80,4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Form Fields with Fieldsets */}
          <form className="space-y-6">
            <fieldset>
              <legend className="text-[#0ABAB5] text-sm font-semibold uppercase mb-2">Basic Info</legend>
              <div className="space-y-4">
                {JOIN_FORM_FIELDS.slice(0, 3).map(({ field, label, placeholder, type, required }) => (
                  <div key={field} className="group">
                    <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-1">
                      {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full border border-[#0ABAB5]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/10 transition-all duration-300 bg-white/90 backdrop-blur-sm text-sm sm:text-base shadow-inner"
                      aria-invalid={formErrors[field] ? 'true' : 'false'}
                      aria-describedby={formErrors[field] ? `${field}-error` : undefined}
                    />
                    {formErrors[field] && (
                      <p id={`${field}-error`} className="text-red-500 text-xs mt-1" role="alert">
                        {formErrors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-[#0ABAB5] text-sm font-semibold uppercase mb-2">Wellness Profile</legend>
              <div className="space-y-4">
                {/* Experience dropdown */}
                <div className="group">
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-1">
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full border border-[#0ABAB5]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/10 transition-all duration-300 bg-white/90 backdrop-blur-sm text-sm sm:text-base"
                    aria-invalid={formErrors.experience ? 'true' : 'false'}
                    aria-describedby={formErrors.experience ? `experience-error` : undefined}
                  >
                    {EXPERIENCE_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.experience && (
                    <p id="experience-error" className="text-red-500 text-xs mt-1" role="alert">
                      {formErrors.experience}
                    </p>
                  )}
                </div>

                {/* Interests textarea */}
                <div className="group">
                  <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-1">
                    Wellness Interests
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="What aspects of wellness interest you most?"
                    className="w-full border border-[#0ABAB5]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ABAB5] focus:ring-2 focus:ring-[#0ABAB5]/10 transition-all duration-300 bg-white/90 backdrop-blur-sm text-sm sm:text-base resize-none shadow-inner"
                  />
                </div>
              </div>
            </fieldset>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="button"
                onClick={handleCloseForm}
                onKeyPress={(e) => handleKeyPress(e, handleCloseForm)}
                className="w-full sm:flex-1 text-gray-600 hover:text-[#0ABAB5] py-3 px-6 rounded-xl border border-[#0ABAB5]/20 hover:border-[#0ABAB5] transition-all duration-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ABAB5] focus:ring-offset-2 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-full sm:flex-1 bg-[#0ABAB5] hover:bg-[#08918d] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0ABAB5] focus:ring-offset-2 text-sm sm:text-base"
              >
                Join Community
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Custom Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0px); opacity: 1; }
        }
        
        .animate-gentle-pulse {
          animation: gentle-pulse 4s ease-in-out infinite;
        }
        
        .animate-gentle-float {
          animation: gentle-float 6s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-gentle-pulse,
          .animate-gentle-float,
          .animate-scale-in {
            animation: none;
          }
        }
        
        /* Scrolling optimization for mobile */
        @media (max-height: 600px) {
          .max-h-[90vh] {
            max-height: 100vh;
          }
        }
      `}</style>
    </div>
  );
}