/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from "../Avatar/Avatar";
// import jsonDetail from "../../../data/video-details.json";
import { timeAgo } from '../../functions/timeAgo';



// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";
;

// -- GLOBAL VARIABLES -- //


const CommentsContainer = (props) => {

  console.log("props fromcommentscontainer:", props.selectedVideo.comments)

// selectedVideo[0]!! woof...
// console.log("props from commentscontainer:", props.selectedVideo[0].comments);
// console.log("curcur",selectedVideo.selectedVideo);
// const { id, name, comment, timestamp } = props.selectedVideo[0].comments;
// const name = props.selectedVideo.
// console.log("comment:" ,props.selectedVideo.comments[0]);


  return (
    <div className="CommentsContainer">
  
        {/* {props.selectedVideo.map(video =>( */}
        
            {props.selectedVideo.comments.map(comment => (
          
          <article className="Comment" key={comment.id}>
               
                <div className="Comment__top" >
                    <Avatar />
                    <p className="Comment__name">{comment.name}</p>
                    <p className="Comment__date">{timeAgo(comment.timestamp)}</p>
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