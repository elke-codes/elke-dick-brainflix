/// --- HEADER.JS --- ///
import React from "react";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import BrainflixLogo from "../BrainflixLogo/BrainflixLogo";
// -- IMPORT SCSS -- //
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

// -- COMPONENT DECLARATION -- //
const Header = (props) => {
  return (
  <header className="header">
    
      <BrainflixLogo/>
      <SearchBar/>
      <Avatar />
      <Button buttonText="Upload"/>
  </header>
  )
};

export default Header;
