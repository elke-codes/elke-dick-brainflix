/// --- COMMENTSCONTAINER JSX --- ///

import React from 'react';
import Avatar from '../../Avatar/Avatar';
import jsonDetail from "../../../data/video-details.json";


// -- IMPORT SCSS -- //
import "./CommentsContainer.scss";

// -- GLOBAL VARIABLES -- //

// https://www.stechies.com/unexpected-token-o-json-position-1/
const convertDetailData = JSON.stringify(jsonDetail) ;

const detailVideoData = JSON.parse(convertDetailData);

// const comments = detailVideoData.map(video => {
//   return video.comments;
// });


const CommentsContainer = () => {
  return (
    <div className="CommentsContainer">
      <div className="CommentsContainer__comments">

      <div>
        {detailVideoData.map(video =>(
          <article className="CommentsContainer__comment" key={video.id}>

{/* need function to get current video id and comments related to that video only */}
            <div>
            {video.comments.map(comment => (
            <div>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
            <p>{comment.timestamp}</p>
            </div>
            ))}
         
            </div>
           
          </article>
             
        ))}
          
         
      </div>

      </div>
      <Avatar />
    </div>
  );
};

export default CommentsContainer;