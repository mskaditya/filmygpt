import React from 'react';
import splashgif from "./assets/images/users/filmigpt_logo-removebg-preview.gif"


const SplashScreen = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <img src={splashgif} alt='loading...' width="800"/>
    </div>
  );
};

export default SplashScreen;
