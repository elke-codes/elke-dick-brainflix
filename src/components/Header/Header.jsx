/// --- HEADER JSX--- ///
import React from "react";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import BrainflixLogo from "../BrainflixLogo/BrainflixLogo";
// -- IMPORT SCSS -- //
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

// -- COMPONENT DECLARATION -- //
const Header = () => {
    console.log("Header");

    return (
        <header className="header">
            <BrainflixLogo />
            <SearchBar />
            <Avatar addedClass="Avatar__header" />
            <Link to="/upload">
                <Button buttonText="Upload" />
            </Link>
        </header>
    );
};

export default Header;
