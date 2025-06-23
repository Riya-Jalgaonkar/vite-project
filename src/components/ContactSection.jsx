import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

      <p className="mb-2 text-gray-700">
        Email: <a href="mailto:contact@nutritionist.com" className="text-green-600 hover:underline">contact@nutritionist.com</a>
      </p>
      <p className="mb-2 text-gray-700">
        Phone: <a href="tel:+1234567890" className="text-green-600 hover:underline">+1234567890</a>
      </p>
      <p className="mb-6 text-gray-700">
        Follow us on Instagram:{" "}
        <a
          href="https://instagram.com/nutritionist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          @nutritionist
        </a>
      </p>

      <div className="flex justify-center space-x-6">
        <a href="https://instagram.com/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.svg" alt="Instagram" className="h-8 w-8 hover:opacity-80" />
        </a>
        <a href="https://facebook.com/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/facebook.svg" alt="Facebook" className="h-8 w-8 hover:opacity-80" />
        </a>
        <a href="https://linkedin.com/in/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin.svg" alt="LinkedIn" className="h-8 w-8 hover:opacity-80" />
        </a>
      </div>
    </section>
  );
}
