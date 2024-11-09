import React from "react";

const HomeVideo: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <video preload="auto" autoPlay muted loop className="w-screen">
        <source src="/videos/home-hero-video-med.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default HomeVideo;
