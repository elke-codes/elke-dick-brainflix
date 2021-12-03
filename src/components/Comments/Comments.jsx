/// --- COMMENTS.JS --- ///
import CommentForm from "./CommentForm/CommentForm";
import React from "react";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
// -- IMPORT SCSS -- //
import "./Comments.scss";

// -- COMPONENT DECLARATION -- //
const Comments = (props) => {
  // console.log("props from comments:", props.currentVideo[0].comments.length);
  const amountOfComments = props.currentVideo[0].comments.length;
  return (
    <section className="Comments">
        <h3 className="Comments__title">{amountOfComments} comments</h3>
        <CommentForm />
        <CommentsContainer videosDetail={props.videosDetail} selectedVideo={props.selectedVideo} currentVideo={props.currentVideo}/>
    </section>
  )
};

export default Comments;
