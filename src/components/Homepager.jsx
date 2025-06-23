import React from 'react';
import VideoSection from "./VideoSection";
import FormSection from './FormSection';
import TransformationsSection from './TransformationsSection';
import ContactSection from './ContactSection';
import Header from './header';

export default function HomePage() {
  return (
    <div className="pt-24">
    <main className="flex flex-col w-full">
      <Header/>
      <VideoSection />
      <TransformationsSection />
      <FormSection />
      <ContactSection />
       {/* If you see this, React is working! */}
    </main>
    </div>
  );
}
