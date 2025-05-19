import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Header.css";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className= "header">
      <h1 className="logo">Mohini Khatavkar</h1>
      <p className="site-name">fitbharatmission.co.in</p>
      <div className="logo-container">
      <nav className="nav-links">
        <Link smooth to="/#joinus" className="nav-link">
          Join Us
        </Link>
        <Link smooth to="/#contact" className="nav-link">
          Contact
        </Link>
        <Link smooth to="/#customers" className="nav-link">
          Reviews
        </Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
