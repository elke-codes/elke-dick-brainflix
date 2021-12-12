import React from "react";
import Button from "../../components/Button/Button";
import DividerLine from "../../components/DividerLine/DividerLine";
import Header from "../../components/Header/Header";
import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const VideoUploadPage = () => {
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
                            value="Add a title to your video"
                        />
                        <label
                            htmlFor="video-description"
                            className="section-title ">
                            add a video description
                        </label>
                        <input
                            type="text-area"
                            name="video-description"
                            value="Add a description to your video"
                            className="upload__description-input"
                        />
                    </form>
                </div>
                <DividerLine />
                <div className="upload__buttons">
                    <Button
                        buttonText="upload"
                        addedButtonClass="Button__upload"
                    />
                    <Button
                        buttonText="cancel"
                        addedButtonClass="Button__cancel"
                    />
                </div>
            </section>
        </>
    );
};

export default VideoUploadPage;
