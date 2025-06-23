import { HashLink as Link } from "react-router-hash-link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFEDF3]/70 backdrop-blur-md border-b border-[#0ABAB5] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex flex-col leading-tight">
          <h1 className="text-xl font-extrabold text-[#0ABAB5] tracking-tight">
            Mohini Khatavkar
          </h1>
          <span className="text-[11px] text-gray-600">fitbharatmission.co.in</span>
        </div>

        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <Link
            smooth
            to="/#joinus"
            className="hover:text-[#56DFCF] transition"
          >
            Join Us
          </Link>
          <Link
            smooth
            to="/#contact"
            className="hover:text-[#56DFCF] transition"
          >
            Contact
          </Link>
          <Link
            smooth
            to="/#customers"
            className="hover:text-[#56DFCF] transition"
          >
            Reviews
          </Link>
        </nav>
      </div>
    </header>
  );
}
