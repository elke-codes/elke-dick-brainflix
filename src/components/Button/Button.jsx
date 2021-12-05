/// --- BUTTON JSX ---///
import React from 'react';
// -- IMPORT SCSS -- //
import "./Button.scss";


const handleButtonClick = (e) =>{
  e.preventDefault();
}


const Button = () => {
  return (
   <button className="Button"  onClick={handleButtonClick}>
     UPLOAD
   </button>
  );
};

export default Button;