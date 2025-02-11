import React, { useState, useEffect } from 'react';

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${className}`}>
      <h1 className="logo">
        Mohini Khatavkar
      </h1>
      <p className="site-name">fitbharatmission.co.in</p>
      <nav className="nav-links">
        <a href="#joinus" className={activeLink === 'joinus' ? 'active' : ''}>Join Us</a>
        <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
        <a href="#customers" className={activeLink === 'customers' ? 'active' : ''}>Reviews</a>
      </nav>
    </header>
  );
};

export default Header;
