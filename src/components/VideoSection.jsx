import React from "react";

export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-[#ADEED9] to-[#FFEDF3] text-center">
       
      <h2 className="text-3xl font-bold mb-4 text-[#0ABAB5]">Welcome to Our Program</h2>
      <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
        Watch this video to learn more about our wellness journey and how it can benefit you.
      </p>
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl border-4 border-[#0ABAB5] p-10 text-center">
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#ADEED9]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Intro Video"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </section>
  );
}
