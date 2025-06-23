import { HashLink as Link } from "react-router-hash-link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-600 text-white py-4 px-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-extrabold tracking-wide">Mohini Khatavkar</h1>
        <p className="text-sm text-white/80">fitbharatmission.co.in</p>
      </div>

      <nav className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
        <Link smooth to="/#joinus" className="hover:underline hover:text-white/80 transition">
          Join Us
        </Link>
        <Link smooth to="/#contact" className="hover:underline hover:text-white/80 transition">
          Contact
        </Link>
        <Link smooth to="/#customers" className="hover:underline hover:text-white/80 transition">
          Reviews
        </Link>
      </nav>
    </header>
  );
}
