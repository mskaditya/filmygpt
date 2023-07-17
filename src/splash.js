import React, { useEffect } from 'react';
import splashVideo from './assets/video/splashscreen.mp4'; // Replace with the path to your video file

const SplashScreen = () => {
  useEffect(() => {
    // After the video ends, remove the splash screen
    const videoElement = document.getElementById('splash-video');
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handleVideoEnd = () => {
    // Code to remove the splash screen (e.g., update state, navigate to the next page, etc.)
  };

  return (
    <div className="splash-screen">
      <video id="splash-video" autoPlay muted width="1800" height="1400">
        <source src={splashVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
