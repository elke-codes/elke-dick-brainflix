/// --- COMMENTS.JS --- ///

import React from "react";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
// -- IMPORT SCSS -- //
import "./Comments.scss";

// -- COMPONENT DECLARATION -- //
const Comments = () => {
  return (
    <section className="Comments">
        <h3 className="Comments__title"> (number of) comments</h3>
        {/*form add comments*/}
        <CommentsContainer />
    </section>
  )
};

export default Comments;
