import { useState } from "react";
import React from "react";

export default function JoinCommunitySection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowForm(false);
    // Proceed to payment (hook up with Razorpay as in your previous logic)
    alert("Proceeding to payment... (mock)");
  };

  return (
    <section className="bg-[#FFEDF3] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl border-4 border-[#0ABAB5] p-10 text-center">
        <h3 className="text-3xl font-extrabold text-[#0ABAB5] mb-2">Join Our Wellness Circle</h3>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Get 1-on-1 guidance, exclusive workshops, and direct access to Mohini. Let’s build a healthier you — together.
        </p>
        <p className="text-xl font-semibold text-[#0ABAB5] mb-6">Just ₹299/month</p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#0ABAB5] hover:bg-[#08918d] text-white text-lg font-semibold px-6 py-3 rounded-xl transition-transform transform hover:scale-105"
          >
            Join Now
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-5 max-w-md mx-auto">
            {["name", "email", "phone", "address"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-gray-700 capitalize">
                  {field}
                </label>
                {field === "address" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={2}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder="Where can we reach you?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={
                      field === "name" ? "Full Name" :
                      field === "email" ? "you@gmail.com" :
                      field === "phone" ? "+91XXXXXXXXXX" : ""
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]"
                  />
                )}
              </div>
            ))}

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#0ABAB5] hover:bg-[#08918d] text-white px-6 py-2 rounded-md text-sm font-medium"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
