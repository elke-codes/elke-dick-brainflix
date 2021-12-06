/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from "../Avatar/Avatar";

// --IMPORT HELPER FUNCTION --//
import { timeAgo } from '../../functions/timeAgo';

// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";
import DividerLine from '../DividerLine/DividerLine';


const CommentsContainer = (props) => {


  return (
    <div className="CommentsContainer">
        
        {props.selectedVideo.comments.map(comment => (
          <>
          <DividerLine addedDividerClass="DeviderLine__comment"/>
          <article className="Comment" key={comment.id}>
               
              
                    <Avatar addedClass="Avatar__comment"/>
                     <div className="Comment__top" >
                    <div className="Comment__info-wrapper"> 
                      <p className="Comment__name">{comment.name}</p>
                      <p className="Comment__date">{timeAgo(comment.timestamp)}</p>
                    </div>
                {/* </div> */}
                <p className="Comment__comment">{comment.comment}</p>
                </div>
        
          </article>
          </>
            )  
        )}
    </div>
  );
};

export default CommentsContainer;