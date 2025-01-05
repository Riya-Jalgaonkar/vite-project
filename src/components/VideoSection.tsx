import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="video-section">
      <h2>Watch Our Introduction</h2>
      <video controls>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;