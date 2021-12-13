/// --- COMMENT JSX--- ///
import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
// --IMPORT HELPER FUNCTION --//
import { timeAgo } from "../../utils/timeAgo";

const Comment = (props) => {
    const handleClick = (commentID) => {
        props.onDelete(commentID, props.selectedVideo.id);
    };
    return props.selectedVideo.comments.map((comment) => (
        <article className="Comment" key={comment.timestamp}>
            <Avatar addedClass="Avatar__comment" />
            <div className="Comment__top">
                <div className="Comment__info-wrapper">
                    <p className="Comment__name">{comment.name} </p>
                    <p className="Comment__date">
                        {timeAgo(comment.timestamp)}{" "}
                    </p>
                    <button
                        id={comment.id}
                        onClick={() => handleClick(comment.id)}
                        className="Comment__delete-button">
                        <span role="img" aria-label="Delete">
                            Delete 🗑️
                        </span>
                        <span>
                            {console.log("rendering button id", comment.id)}
                        </span>
                    </button>
                </div>
                <p className="Comment__comment">{comment.comment}</p>
            </div>
        </article>
    ));
};

export default Comment;
