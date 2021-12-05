/// --- COMMENTS.JS --- ///
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
// -- IMPORT SCSS -- //
import "./Comments.scss";

// -- COMPONENT DECLARATION -- //
const Comments = (props) => {
  console.log("props from comments:", props.selectedVideo);
  const amountOfComments = props.selectedVideo.comments.length;
  return (
    <section className="Comments">
        <h3 className="Comments__title">{amountOfComments} comments</h3>
        <CommentForm />
        <CommentsContainer 
        videosDetail={props.videosDetail} 
        selectedVideo={props.selectedVideo}/>
    </section>
  )
};

export default Comments;
