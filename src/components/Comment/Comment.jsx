/// --- COMMENT JSX--- ///
import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
// --IMPORT HELPER FUNCTION --//
import { timeAgo } from "../../utils/timeAgo";

const Comment = (props) => {
    return props.selectedVideo.comments.map((comment) => (
        <article className="Comment" key={comment.timestamp}>
            <Avatar addedClass="Avatar__comment" />
            <div className="Comment__top">
                <div className="Comment__info-wrapper">
                    <p className="Comment__name">{comment.name} </p>
                    <p className="Comment__date">
                        {timeAgo(comment.timestamp)}{" "}
                    </p>
                </div>
                <p className="Comment__comment">{comment.comment}</p>
            </div>
        </article>
    ));
};

export default Comment;
