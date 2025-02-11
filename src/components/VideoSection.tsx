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
      <div className="sm:gap-[52px] md:gap-[78px] gap-[104px] flex w-full flex-col items-center bg-gray-100 p-8 sm:p-5">
        
        <VideoSection
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Welcome to Our Program"
          description="Watch this video to learn more about our program and how you can benefit from joining."
        />
        <div className="rounded-[66px] max-w-[1018px] h-[438px] mx-auto mb-1 w-full bg-green-200 md:px-5" />
      </div>
    </>
  );
};

export default FrameOnePage;
