/// --- BUTTON JSX ---///
import React from 'react';
// -- IMPORT SCSS -- //
import "./Button.scss";


const handleButtonClick = (e) =>{
  e.preventDefault();
}


const Button = (props) => {
const { buttonText } = props

  return (
   <button className="Button"  onClick={handleButtonClick}>
     {buttonText}
   </button>
  );
};

export default Button;