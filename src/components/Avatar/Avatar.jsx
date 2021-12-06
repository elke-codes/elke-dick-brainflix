/// --- AVATAR JSX --- ///

import React from 'react';
import "./Avatar.scss";

import Mohan from "../../assets/images/Mohan-muruge.jpg";

const Avatar = (props) => {
  const { addedClass } =props;

  console.log("props from avatar", props);

  return (
    <div className={"Avatar"+ " " + addedClass}>
      <img src={Mohan} alt="profile picture" className="Avatar__image" />
    </div>
  );
};

export default Avatar;