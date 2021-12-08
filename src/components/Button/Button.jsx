/// --- BUTTON JSX ---///
import React from 'react';
import { Link } from 'react-router-dom';
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
     <Link to="/upload">
     {buttonText}
     </Link>
   </button>
  );
};

export default Button;