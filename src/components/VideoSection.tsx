import React, { useState } from "react";
import { Helmet } from "react-helmet";

import '../styles/videostyling.css'; 
// Ensure you have an image in your assets








// VideoSection Component
const VideoSection: React.FC<{ className?: string; videoSrc: string; title: string; description: string }> = ({
  className = "",
  videoSrc,
  title,
  description,
}) => {
  return (
    <section className={`video-section ${className} flex flex-col items-center justify-center p-8`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8">{description}</p>
      <div className="video-container max-w-full h-auto relative">
        <iframe
          className="w-full h-64 md:h-96"
          src={videoSrc}
          title={title}
          allowFullScreen
        />
      </div>
    </section>
  );
};


const MembershipCTA: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    await handlePayment();
  };

  const handlePayment = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
      console.log('Using Razorpay Key:', RAZORPAY_KEY);
      console.log('Creating order...');
      
      // Create order
      const response = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Order creation failed:', errorData);
        throw new Error(errorData.message || 'Failed to create order');
      }

      const order = await response.json();
      console.log('Order created:', order);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Mohini Khatavkar Wellness",
        description: "Monthly Community Membership",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            console.log('Payment response:', response);
            // Verify payment and send user details
            const verifyResponse = await fetch(`${API_URL}/api/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userDetails: formData
              }),
            });

            if (!verifyResponse.ok) {
              const errorData = await verifyResponse.json();
              console.error('Payment verification failed:', errorData);
              throw new Error(errorData.message || 'Payment verification failed');
            }

            const verifyResult = await verifyResponse.json();
            console.log('Payment verification result:', verifyResult);
            
            if (verifyResult.success) {
              alert("Payment successful! Welcome to the community!");
            } else {
              alert(verifyResult.message || "Payment verification failed!");
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            alert(error instanceof Error ? error.message : "Error verifying payment!");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#10B981",
        },
        modal: {
          ondismiss: function() {
            alert("Payment cancelled. Please try again.");
          }
        },
        config: {
          display: {
            blocks: {
              banks: {
                name: "Pay using UPI",
                instruments: [
                  {
                    method: "upi",
                    flow: "intent",
                    vpa: "success@razorpay" // Test UPI ID
                  }
                ]
              },
              cards: {
                name: "Pay using Cards",
                instruments: [
                  {
                    method: "card",
                    flow: "popup"
                  }
                ]
              }
            },
            sequence: ["block.banks", "block.cards"],
            preferences: {
              show_default_blocks: true
            }
          }
        }
      };

      console.log('Opening Razorpay with options:', options);
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert(error instanceof Error ? error.message : "Error initiating payment! Please try again.");
    }
  };

  return (
    <section className="membership-cta">
      <h3 className="text-2xl font-semibold mb-4">Join Our Exclusive Community</h3>
      <p className="mb-4">
        Unlock personal support, wellness sessions, and connect with like-minded individuals!
      </p>
      <ul className="mb-4 text-left list-disc list-inside text-gray-700">
        <li>1-on-1 guidance</li>
        <li>Exclusive workshops</li>
        <li>Direct access to Mohini</li>
      </ul>
      <div className="text-xl font-bold mb-4">Rs. 299 / month</div>
      
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Join Now
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
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
    </section>
  );
};




// FrameOnePage Component
const FrameOnePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Program - Engage & Connect</title>
        <meta
          name="description"
          content="Become a part of our exclusive community by joining our program. Contact Mohini Khatavkar to get started and engage with main features."
        />
      </Helmet>
        <VideoSection
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Welcome to Our Program"
          description="Watch this video to learn more about our program and how you can benefit from joining."
        />
        <div className="rounded-[66px] max-w-[1018px] h-[438px] mx-auto mb-1 w-full bg-green-200 md:px-5" />
        <MembershipCTA />
    </>
  );
};

export default FrameOnePage;
