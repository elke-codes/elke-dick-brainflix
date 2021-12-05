/// --- HEADER.JS --- ///
import React from "react";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import BrainflixLogo from "../BrainflixLogo/BrainflixLogo";
// -- IMPORT SCSS -- //
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

// -- COMPONENT DECLARATION -- //
const Header = () => {
  return (
  <header className="header">
        {/* //div for searchbar and avatar flexbox */}
        {/* //hbar */}
  
      <BrainflixLogo/>
      <div className="header__flex">
         <SearchBar/>
         <Avatar />
      </div>

      <Button buttonText="Upload"/>
  </header>
  )
};

export default Header;
