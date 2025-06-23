import { useState } from "react";
import { Helmet } from "react-helmet";
import React from "react";


console.log("VideoSection loaded");
export default function VideoSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowForm(false);
    await handlePayment();
  };

  const handlePayment = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to create order');
      const order = await response.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Mohini Khatavkar Wellness",
        description: "Monthly Community Membership",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch(`${API_URL}/api/verify-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userDetails: formData
            }),
          });

          const result = await verifyRes.json();
          alert(result.success ? "Payment successful!" : result.message || "Payment verification failed");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#10B981" },
        modal: { ondismiss: () => alert("Payment cancelled.") },
      };

      // new window.Razorpay(options).open();
      if (typeof window !== 'undefined' && window.Razorpay) {
  new window.Razorpay(options).open();
} else {
  alert("Razorpay SDK not loaded");
}
    } catch (err) {
      alert(err.message || "Payment error. Please try again.");
    }
  };

  
    return (
  <>
    <Helmet>
      <title>Join Our Program - Engage & Connect</title>
      <meta
        name="description"
        content="Become a part of our exclusive community by joining our program."
      />
    </Helmet>

    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Program</h2>
      <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
        Watch this video to learn more about our program and how you can benefit from joining.
      </p>
      <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-green-100 mb-10">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Intro Video"
          allowFullScreen
        ></iframe>
      </div>
    </section>

    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/90 p-8 rounded-3xl shadow-lg border border-green-100 text-center">
        <h3 className="text-2xl font-bold mb-4 text-green-700">Join Our Exclusive Community</h3>
        <p className="text-gray-700 mb-6">
          Unlock personal support, wellness sessions, and connect with like-minded individuals!
        </p>
        <ul className="mb-6 text-left list-disc list-inside text-gray-600">
          <li>1-on-1 guidance</li>
          <li>Exclusive workshops</li>
          <li>Direct access to Mohini</li>
        </ul>
        <div className="text-xl font-semibold text-green-700 mb-6">Rs. 299 / month</div>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            Join Now
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {["name", "email", "phone", "address"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                  {field}
                </label>
                {field === "address" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={3}
                    required
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  </>
);

}
