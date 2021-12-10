/// --- VIDEO JSX --- ///
import React from "react";
import "./Video.scss";

const Video = (props) => {
    console.log(props.selectedVideo);
    const { image } = props.selectedVideo;

    return (
        <div className="video-container">
            <video
                className="video-container__video"
                src=""
                poster={image}
                controls></video>
        </div>
    );
};

export default Video;
