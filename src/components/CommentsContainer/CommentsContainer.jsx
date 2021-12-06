/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Comment from '../Comment/Comment';
// import Avatar from "../Avatar/Avatar";
// import { v4 as uuid } from "uuid";



// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";
import DividerLine from '../DividerLine/DividerLine';


const CommentsContainer = (props) => {

  return (
    <div className="CommentsContainer">
 
          <DividerLine addedDividerClass="DeviderLine__comment"/>
          <Comment selectedVideo={props.selectedVideo}/>
  
    </div>
  );
};

export default CommentsContainer;