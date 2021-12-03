/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from '../../Avatar/Avatar';
import jsonDetail from "../../../data/video-details.json";



// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";
;

// -- GLOBAL VARIABLES -- //

// https://www.stechies.com/unexpected-token-o-json-position-1/
const convertDetailData = JSON.stringify(jsonDetail) ;

const detailVideoData = JSON.parse(convertDetailData);

// const comments = detailVideoData.map(video => {
//   return video.comments;
// });


const CommentsContainer = (props) => {
  return (
    <div className="CommentsContainer">
  
        {detailVideoData.map(video =>(
          <article className="CommentsContainer__comment" key={video.id}>

{/* need function to get current video id and comments related to that video only */}

            {video.comments.map(comment => (
              <>
            <div className="Comment__top">
            <p className="Comment__name">{comment.name}</p>
            <p className="Comment__comment">{comment.comment}</p>
            </div>

            <p className="Comment__date">{comment.timestamp}</p>
            </>
            ))}
         

           
          </article>
             
        ))}
          
         
     

      <Avatar />
    </div>
  );
};

export default CommentsContainer;