/// --- BUTTON JSX ---///
import React from "react";
import { Link } from "react-router-dom";
// -- IMPORT SCSS -- //
import "./Button.scss";

const handleButtonClick = (e) => {
    e.preventDefault();
};

const Button = (props) => {
    const { buttonText } = props;
    const { addedButtonClass } = props;

    let buttonClass = "";
    if (addedButtonClass) {
        buttonClass = " " + addedButtonClass;
    }

    return (
        <button className={"Button" + buttonClass}>
            {buttonText}
            {/* onClick={handleButtonClick} */}
            {/* if the button is the upload button redirect to homepage, if the button is a comment button post a comment if the button is the cancel button redirect to the homepage */}
            {/* <Link to="/upload"> </Link> */}
        </button>
    );
};

export default Button;
