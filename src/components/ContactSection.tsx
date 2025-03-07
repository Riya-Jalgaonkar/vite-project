import React from 'react';
import '../styles/contact.css'; // Import the CSS file
import './header.tsx'; // Import the header file

const ContactSection: React.FC = () => {
  return (
    // Remove the nested section and use a single section with id
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:contact@nutritionist.com">contact@nutritionist.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
      <p>Follow us on Instagram: <a href="https://instagram.com/nutritionist" target="_blank" rel="noopener noreferrer">@nutritionist</a></p>
      <div className="social-icons">
        <a href="https://instagram.com/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://facebook.com/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://linkedin.com/in/nutritionist" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;