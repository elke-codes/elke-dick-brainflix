/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from '../../Avatar/Avatar';
// import jsonDetail from "../../../data/video-details.json";



// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";
;

// -- GLOBAL VARIABLES -- //


const CommentsContainer = (props) => {
// currentVideo[0]!! woof...
// console.log("props from commentscontainer:", props.currentVideo[0].comments);
// console.log("curcur",currentVideo.currentVideo);
// const { id, name, comment, timestamp } = props.currentVideo[0].comments;
// const name = props.currentVideo.
// console.log("comment:" ,props.currentVideo.comments[0]);


  return (
    <div className="CommentsContainer">
  
        {/* {props.currentVideo.map(video =>( */}
        
            {props.currentVideo[0].comments.map(comment => (
          
          <article className="Comment">
               
                <div className="Comment__top">
                    <Avatar />
                    <p className="Comment__name">{comment.name}</p>
                    <p className="Comment__date">{comment.timestamp}</p>
                </div>
                <p className="Comment__comment">{comment.comment}</p>
               
        
                </article>
            // ))}
         

            )
     
             
        )}
 


    </div>
  );
};

export default CommentsContainer;