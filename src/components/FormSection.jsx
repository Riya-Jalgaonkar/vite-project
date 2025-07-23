import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import axios from "axios";
import React from "react";
import { motion } from "framer-motion";
import loadRazorpay from './payment';

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
    await axios.post('http://localhost:5000/api/save-user', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone
  });
    const userDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    console.log("Calling loadRazorpay with userDetails:", userDetails);

    try {
      const result = await loadRazorpay(userDetails);
      console.log("Razorpay result:", result);
    } catch (err) {
      console.error("Payment failed:", err);
    }

    setFormData({ name: '', email: '', phone: '', whatsapp: false });
  } catch (error) {
    console.error("Error adding document: ", error);
    setMessage('An error occurred. Please try again.');
  }

  setLoading(false);
};


  return (
    <section id="joinus" className="py-20 px-4 bg-gradient-to-b from-[#56DFCF] via-[#ADEED9] to-[#FFEDF3] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-4 border-[#0ABAB5] relative"
      >
        {/* Trust Tag */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-sm font-medium rounded-full shadow border border-[#0ABAB5]/20 text-[#0ABAB5]">
          ⭐ Trusted by 200+ women
        </div>

        <h2 className="text-4xl font-extrabold text-[#0ABAB5] mb-4 tracking-tight font-manrope">
          Join Our Wellness Tribe
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed font-manrope">
          Sign up to receive soulful health tips, exclusive community invites, and personal guidance — all tailored for your vibrant journey 🌿
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Aditi Sharma"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gmail Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone (with +91)</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]"
              />
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
                className="h-4 w-4 text-[#0ABAB5] border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">Send updates on WhatsApp</label>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full bg-[#0ABAB5] hover:bg-[#089e99] text-white font-semibold py-3 rounded-xl shadow-lg transition-transform"
          >
            {loading ? 'Submitting...' : '🌟 Join Now – Let’s Begin!'}
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-sm text-[#0ABAB5] font-medium text-center"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}