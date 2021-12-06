/// --- BUTTON JSX ---///
import React from 'react';
// -- IMPORT SCSS -- //
import "./Button.scss";


const handleButtonClick = (e) =>{
  e.preventDefault();
}

const Button = (props) => {

const { buttonText } = props;
const { addedButtonClass } = props;

let buttonClass = "";
if(addedButtonClass) {
  buttonClass = " " + addedButtonClass;
}

  return (
   <button className={"Button"+ buttonClass}  onClick={handleButtonClick}>
     {buttonText}
   </button>
  );
};

export default Button;