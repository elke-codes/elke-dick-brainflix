/// --- BUTTON JSX ---///
import React from "react";

// -- IMPORT SCSS -- //
import "./Button.scss";

const Button = (props) => {
    const { buttonText, addedButtonClass, onSubmit } = props;

    let buttonClass = "";
    if (addedButtonClass) {
        buttonClass = " " + addedButtonClass;
    }

    return (
        <button
            onClick={onSubmit}
            type="submit"
            className={"Button" + buttonClass}>
            {buttonText}
        </button>
    );
};

export default Button;
