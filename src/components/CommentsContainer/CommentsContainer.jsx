/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from "../Avatar/Avatar";

// --IMPORT HELPER FUNCTION --//
import { timeAgo } from '../../functions/timeAgo';

// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";


const CommentsContainer = (props) => {


  return (
    <div className="CommentsContainer">
        
        {props.selectedVideo.comments.map(comment => (
          
          <article className="Comment" key={comment.id}>
               
                <div className="Comment__top" >
                    <Avatar />
                    <p className="Comment__name">{comment.name}</p>
                    <p className="Comment__date">{timeAgo(comment.timestamp)}</p>
                </div>
                <p className="Comment__comment">{comment.comment}</p>
        
          </article>
          
            )  
        )}
    </div>
  );
};

export default CommentsContainer;