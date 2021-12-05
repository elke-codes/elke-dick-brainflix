import React from 'react';

import logo from "../../assets/images/logo/BrainFlix-logo.svg"
import "./BrainflixLogo.scss";

const BrainflixLogo = () => {
  return (
      <img src={logo} alt="Brainflix logo. Play button and text BRAINFLIX" className="logo"/>
  );
};

export default BrainflixLogo;