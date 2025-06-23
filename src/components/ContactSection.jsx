import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#FFEDF3] to-white py-20 px-4 flex justify-center"
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border-4 border-[#0ABAB5] max-w-md w-full p-8 text-center">
        <h2 className="text-2xl font-extrabold text-[#0ABAB5] mb-2">
          Mohini Khatavkar Wellness
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Personal Wellness Coach • Hormone Healing • Holistic Nutrition
        </p>

        <div className="space-y-3 text-left text-gray-800 text-sm mb-6">
          <p>
            📩{" "}
            <a
              href="mailto:contact@nutritionist.com"
              className="text-[#0ABAB5] font-medium hover:underline"
            >
              contact@nutritionist.com
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="tel:+1234567890"
              className="text-[#0ABAB5] font-medium hover:underline"
            >
              +123 456 7890
            </a>
          </p>
          <p>
            📍 Based in India • Available Online
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://instagram.com/nutritionist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="images/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://facebook.com/nutritionist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="images/facebook.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://linkedin.com/in/nutritionist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="images/linkedin.svg"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
