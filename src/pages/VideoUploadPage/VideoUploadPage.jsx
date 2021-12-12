import React from "react";
import Button from "../../components/Button/Button";
import DividerLine from "../../components/DividerLine/DividerLine";

import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const VideoUploadPage = (props) => {
    return (
        <>
            <DividerLine />
            <section className="upload">
                <h2 className="upload__title">Upload Video</h2>
                <DividerLine />
                <p className="section-title">video thumbnail</p>
                <div className="upload__wrapper">
                    <img
                        className="upload__image"
                        src={thumbnail}
                        alt="topview of someone riding a blue bikes closeup"
                    />
                    <form className="upload__input">
                        <label
                            htmlFor="video-title"
                            className="section-title upload__label-title">
                            title your video
                        </label>
                        <input
                            type="text"
                            name="video-title"
                            placeholder="Add a title to your video"
                        />
                        <label
                            htmlFor="video-description"
                            className="section-title ">
                            add a video description
                        </label>
                        <input
                            type="text-area"
                            name="video-description"
                            placeholder="Add a description to your video"
                            className="upload__description-input"
                        />
                        <DividerLine />
                        <div className="upload__buttons">
                            <Button
                                buttonText="upload"
                                addedButtonClass="Button__upload"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert(
                                        "your video is being uploaded, we're dropping you off at home"
                                    );
                                    props.history.push("/");
                                }}
                            />
                            <Button
                                buttonText="cancel"
                                addedButtonClass="Button__cancel"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert(
                                        "your video upload is being cancelled, we're bringing you back home"
                                    );
                                    props.history.push("/");
                                }}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default VideoUploadPage;
