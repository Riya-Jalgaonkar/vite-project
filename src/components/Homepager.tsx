import React from 'react';
import VideoSection from './VideoSection';
import FormSection from './FormSection';
import TransformationsSection from './TransformationsSection';
import ContactSection from './ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to [Nutritionist Name]</h1>
      </header>
      <VideoSection />
      <FormSection />
      <TransformationsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;