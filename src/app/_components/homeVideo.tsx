import React from "react";

const homeVideo: React.FC = () => {
  return (
    <div className="">
      <video preload="auto" autoPlay muted loop>
        <source src="/videos/home-hero-video-med.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default homeVideo;
