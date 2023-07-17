import React from 'react';
import splashgif from "./assets/images/users/filmigpt_logo-removebg-preview_2.gif"


const SplashScreen = () => {
  return (

    <div className="splash-screen d-flex justify-content-center align-items-center">
        <div>
            <img src={splashgif} alt='loading...' className='splash-screen-img'/>
        </div>
    </div>
  );
};

export default SplashScreen;
