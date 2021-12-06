import React from 'react';
import "../../App.scss";
import "./DividerLine.scss";

const DividerLine = (props) => {

  const { addedDividerClass } = props;
  let divider = "";
  if(addedDividerClass) {
    divider = " " + addedDividerClass;
  }

  return (
    <div className={"Divider" + divider}></div>
  );
};

export default DividerLine;