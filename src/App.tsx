import React, { useState } from 'react';
import './App.css';

import Contactinfo from "./components/Contactinfo";
import Newloanform from './components/Newloanform';
import Whatweoffer from './components/Whatweoffer';
import Wherewelend from './components/Wherewelend';


interface IState {
  showMap: boolean,
  showSpace: boolean
}

function App() {

  const [showMap, setShowMap] = useState<IState["showMap"]>(false);
  const [showSpace, setShowSpace] = useState<IState["showSpace"]>(false);

  const handleApplicationNavClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeP9fSd3rdL4w-z9nSUWnIYU9ZbjqGYiyoqrYViL_j-NEYZBw/viewform?usp=sf_link", '_blank');
  }

  const handleContactNavClick = () => {
    setShowSpace(true);
  }

  const handleWhereWeLendNavClick = () => {
    if (showMap === false) {
      setShowMap(true);
    }
  }

  const handleWhereWeLendClick = () => {
    if (showMap === true) {
      setShowMap(false);
    } else {
      setShowMap(true);
    }
  };

  return (
    <div className="App">

      <div className="nav-bar">
        <ul>
          <li id='where-we-lend-nav' onClick={handleWhereWeLendNavClick}><a href="#where-we-lend">Where We Lend</a></li>
          <li><a href="#new-loan-form">Prequal Form</a></li>
          <li onClick={handleApplicationNavClick}><a>Application</a></li>
          <li id='contact-us-nav' onClick={handleContactNavClick}><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>

      <div className="center-head"><h1>Capita Mortgage Credit</h1></div>
      <div className="center-head">
        <img alt='Sacramento Tower Bridge' src="https://lh3.googleusercontent.com/pw/AM-JKLXDYo1KzRMu0pyRypEp6u2BfSWicWOJhWLACR-lbe4ATT5sVIfDBUAOCMsKME_18IXMb-ma5qUzI2vcs1tN9w7ao6A-sSOqSJO6a-Gcv5Sf-M3GL5IJ0ylXsGPWLeFaL9nxyp8vDW1gbkfKZhKdF20=w937-h625-no?authuser=2"></img>
      </div>

      <Whatweoffer />

      <div className="center-head">
        <button onClick={handleWhereWeLendClick} id="where-we-lend"><h2>&#8801; Where We Lend &#8801;</h2></button>
        <br></br>
      </div>

      <div className="center-head noscript-container">
        <noscript>
          <h3>Javascript is disabled</h3>
          <p>You need to enable Javascript to view where we lend.</p>
          <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
        </noscript>
      </div>

      <Wherewelend showMap={showMap} />

      <br></br>
      <hr></hr>

      <Newloanform />
      <Contactinfo showSpace={showSpace}/>

    </div>
  );
}

export default App;
