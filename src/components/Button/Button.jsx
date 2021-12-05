/// --- BUTTON JSX ---///

// -- IMPORT SCSS -- //

import "./Button.scss";

import React from 'react';



const Button = (props) => {


  return (
   <button className="Button">
     {props.buttonText}
  </button>
  );
};

export default Button;