import React from "react";
import { Link } from "react-scroll";

export default function FooterSection() {
  return (
    <footer className="bg-[#0ABAB5] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand + Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Mohini Wellness</h3>
          <p className="text-sm leading-relaxed">
            Personal Wellness Coach focusing on hormone healing, sustainable habits & holistic nourishment 🌿
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["home", "about", "services", "customers", "contact"].map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li>
              📩{" "}
              <a
                href="mailto:contact@nutritionist.com"
                className="hover:underline"
              >
                contact@nutritionist.com
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </li>
            <li>📍 India • Online Consultations</li>
          </ul>
        </div>

        {/* Socials + CTA */}
        <div className="flex flex-col items-start space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { href: "https://instagram.com/nutritionist", icon: "instagram.svg", alt: "Instagram" },
                { href: "https://facebook.com/nutritionist", icon: "facebook.svg", alt: "Facebook" },
                { href: "https://linkedin.com/in/nutritionist", icon: "linkedin.svg", alt: "LinkedIn" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={`images/${item.icon}`}
                    alt={item.alt}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-white text-[#0ABAB5] text-sm px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/80">
        © 2025 Mohini Wellness. All Rights Reserved.
      </div>
    </footer>
  );
}
