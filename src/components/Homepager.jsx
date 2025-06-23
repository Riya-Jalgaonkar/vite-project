import React from 'react';
import VideoSection from "./VideoSection";
import FormSection from './FormSection';
import TransformationsSection from './TransformationsSection';
import ContactSection from './ContactSection';
import Header from './header';
import ctaSection from './JoinCommunitySection ';
import JoinCommunitySection from './JoinCommunitySection ';

export default function HomePage() {
  return (
    <div className="bg-[#ADEED9] min-h-screen">
    <main className="flex flex-col w-full">
      <Header/>
      <VideoSection />
      <JoinCommunitySection/>
      <TransformationsSection />
      <FormSection />
      <ContactSection />
       {/* If you see this, React is working! */}
    </main>
    </div>
  );
}
