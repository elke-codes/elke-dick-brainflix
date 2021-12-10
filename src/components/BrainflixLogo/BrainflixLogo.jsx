/// --- BRAINFLIXLOGO JSX --- ///
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./BrainflixLogo.scss";

const BrainflixLogo = () => {
    return (
        <Link to="/">
            <img
                src={logo}
                alt="Brainflix logo. Play button and text BRAINFLIX"
                className="logo"
            />
        </Link>
    );
};

export default BrainflixLogo;
