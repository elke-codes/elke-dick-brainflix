/// --- COMMENTS.JS --- ///
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import DividerLine from "../DividerLine/DividerLine";
// -- IMPORT SCSS -- //
import "./Comments.scss";

// -- COMPONENT DECLARATION -- //
const Comments = (props) => {
    const amountOfComments = props.selectedVideo.comments.length;

    return (
        <section className="Comments">
            <h3 className="Comments__title">{amountOfComments} comments</h3>
            <CommentForm
                selectedVideo={props.selectedVideo}
                onComment={props.onComment}
            />
            <CommentsContainer
                selectedVideo={props.selectedVideo}
                onDelete={props.onDelete}
            />
            <DividerLine />
        </section>
    );
};

export default Comments;
