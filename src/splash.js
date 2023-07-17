import React from 'react';
import splashgif from "./assets/images/users/filmigpt_logo-removebg-preview.gif"


const SplashScreen = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <img src={splashgif} alt='loading...' className='splash-screen-img'/>
    </div>
  );
};

export default SplashScreen;
