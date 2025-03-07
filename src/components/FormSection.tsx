import React, { useState } from 'react';
import '../styles/FormSection.css'; // Assume you have a CSS file for styling
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import axios from "axios"; 
import './header.tsx'

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', whatsapp: false });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateEmail = (email: string): boolean => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phonePattern = /^\+91[0-9]{10}$/; // Assumes phone number starts with +91 followed by 10 digits
    return phonePattern.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      console.log(formData);
      await addDoc(collection(db, 'signups'), formData);
      setMessage('Thank you for signing up!');

      // 🔥 New Feature: Send WhatsApp Message if Checkbox is Checked
      if (formData.whatsapp) {
        try {
          const response = await axios.post("http://localhost:3000/subscribe-whatsapp", {
            phoneNumber: formData.phone
          });

          if (response.status === 200) {
            setMessage('Thank you for signing up! WhatsApp message sent.');
          } else {
            setMessage('Signup successful, but WhatsApp message failed.');
          }
        } catch (error) {
          console.error("WhatsApp API Error:", error);
          setMessage('Signup successful, but WhatsApp message could not be sent.');
        }
      }

      // Reset Form
      setFormData({ name: '', email: '', phone: '', whatsapp: false });

    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  return (
    <section className="form-section">
      <section id="joinus">
      <h2 className="form-title">Sign Up for Updates</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number (e.g., +911234567890)"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          required
        />
        <div className="form-checkbox">
          <input
            type="checkbox"
            name="whatsapp"
            checked={formData.whatsapp}
            onChange={handleChange}
            className="form-checkbox-input"
          />
          <label htmlFor="whatsapp" className="form-checkbox-label">
            Get updates on WhatsApp
          </label>
        </div>
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
      </section>
    </section>
  );
};

export default FormSection;
