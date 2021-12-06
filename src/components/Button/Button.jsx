/// --- BUTTON JSX ---///
import React from 'react';
// -- IMPORT SCSS -- //
import "./Button.scss";


const handleButtonClick = (e) =>{
  e.preventDefault();
}


const Button = (props) => {
  return (
   <button className="Button"  onClick={handleButtonClick}>
     {props.buttonText}
   </button>
  );
};

export default Button;