import React from "react";

const HomeVideo: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <video preload="auto" autoPlay muted loop className="w-screen">
        <source src="/videos/home-hero-video-med.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideo;
