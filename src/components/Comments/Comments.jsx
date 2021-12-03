/// --- COMMENTS.JS --- ///
import CommentForm from "./CommentForm/CommentForm";
import React from "react";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
// -- IMPORT SCSS -- //
import "./Comments.scss";

// -- COMPONENT DECLARATION -- //
const Comments = () => {
  return (
    <section className="Comments">
        <h3 className="Comments__title"> (number of) comments</h3>
        <CommentForm/>
        <CommentsContainer />
    </section>
  )
};

export default Comments;
