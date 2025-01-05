import React, { useState } from 'react';
import './FormSection.css'; // Assume you have a CSS file for styling
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';


const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      console.log(formData)
      await addDoc(collection(db, 'signups'), formData);
      setMessage('Thank you for signing up!');
      setFormData({ name: '', email: '' });
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  return (
    <section className="form-section">
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
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </section>
  );
};

export default FormSection;
