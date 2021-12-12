/// --- COMMENTFORM JSX --- ///

import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./CommentForm.scss";

//render the form to add comments
const CommentForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onComment(
            e.target.name.value,
            e.target.comment.value,
            props.selectedVideo.id
        );
        e.target.reset();
    };

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <Avatar addedClass="Avatar__comments" />
            {/* <div className="Form__wrapper"> */}
            <div className="Form__input">
                <label className="Form__input-title" htmlFor="comment">
                    JOIN THE CONVERSATION
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    id="name"
                    className="Form__input-field"
                />

                <input
                    type="text"
                    name="comment"
                    placeholder="Add a new comment"
                    id="comment"
                    className="Form__input-field"
                />

                <Button
                    buttonText="COMMENT"
                    addedButtonClass="Button__comment"
                    selectedVideo={props.selectedVideo}
                />
            </div>
        </form>
    );
};

export default CommentForm;
