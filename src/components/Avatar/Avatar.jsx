/// --- AVATAR JSX --- ///

import React from 'react';
import "./Avatar.scss";

import Mohan from "../../assets/images/Mohan-muruge.jpg";

const Avatar = (props) => {
  const { addedClass } =props;

  let addedAvatarClass = "";
  if(addedClass) {
    addedAvatarClass = " " + addedClass;
  }

  return (
    <div className={"Avatar"+ addedAvatarClass}>
      <img src={Mohan} alt="representation of self" className="Avatar__image" />
    </div>
  );
};

export default Avatar;