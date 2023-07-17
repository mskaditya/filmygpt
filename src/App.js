import React, { useEffect, useState } from 'react';
import Routes from './routes';
import SplashScreen from './splash'

//Import Scss
import "./assets/scss/themes.scss";

//fackbackend
import fakeBackend from './helpers/fake-backend';
import { useSelector } from 'react-redux';

// //Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase";

// TODO
fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };
  
// // init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const { layoutMode } = useSelector(state => ({
    layoutMode: state.Layout.layoutMode,
  }));

useEffect(() => {
  layoutMode && localStorage.setItem("layoutMode",layoutMode);
}, [layoutMode])

useEffect(() => {
    // Simulate a delay to show the splash screen for a specific duration
    setTimeout(() => {
      setShowSplash(false);
    }, 3200); // Replace with your desired duration in milliseconds
})

  return (
    <div>
      {showSplash ? <SplashScreen /> : <Routes />}
    </div>
    );
};

export default App;
