import React from "react";
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
  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with real Razorpay key
      amount: 50000, // in paise = ₹500
      currency: "INR",
      name: "Mohini Khatavkar Wellness",
      description: "Monthly Community Membership",
      handler: function (response: any) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
        // You can also send this to backend or trigger WhatsApp flow
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#10B981",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    
    // <section className="bg-white max-w-4xl w-full mx-auto p-6 rounded-lg shadow-md my-10 text-center">
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
      <div className="text-xl font-bold mb-4">₹299 / month</div>
      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
      >
        Join Now
      </button>
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
