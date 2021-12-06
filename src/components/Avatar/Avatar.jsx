/// --- AVATAR JSX --- ///

import React from 'react';
import "./Avatar.scss";
import Mohan from "../../assets/images/Mohan-muruge.jpg";

const Avatar = () => {
  return (
    <div className="Avatar">
      <img src={Mohan} alt="profile picture" className="Avatar__image" />
    </div>
  );
};

export default Avatar;