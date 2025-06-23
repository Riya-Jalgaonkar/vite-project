import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import axios from "axios";
import React from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', whatsapp: false });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const validatePhone = (phone) => /^\+91[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
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
      await addDoc(collection(db, 'signups'), formData);
      setMessage('Thank you for signing up!');

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

      setFormData({ name: '', email: '', phone: '', whatsapp: false });
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage('An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section id="joinus" className="py-20 bg-gradient-to-b from-green-50 to-white text-center">
      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-green-100">
        <h2 className="text-3xl font-extrabold text-green-700 mb-6">Join Our Wellness Tribe</h2>
        <p className="text-gray-600 mb-8">Stay in the loop for weekly health tips, updates & more!</p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Gmail</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+911234567890"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="whatsapp"
              checked={formData.whatsapp}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Send updates on WhatsApp</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            {loading ? 'Submitting...' : 'Join Now'}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>}
      </div>
    </section>
  );
}
