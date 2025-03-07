import React from 'react';
import VideoSection from './VideoSection';
import FormSection from './FormSection';
import TransformationsSection from './TransformationsSection';
import ContactSection from './ContactSection';



const HomePage: React.FC = () => {
  

  return (
    <div className="home-page">
      <VideoSection />
      <TransformationsSection />
      <FormSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;