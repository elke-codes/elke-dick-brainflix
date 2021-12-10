/// --- VIDEOINFOSHORT JSX --- ///

import React from "react";

// -- IMPORT SCSS -- //
import "./VideoInfoShort.scss";

// -- COMPONENT DECLARATION -- //

const VideoInfoShort = (props) => {
    console.log("propsform videoinfoshort", props);

    const handleClick = (id) => {
        console.log("id from handle click", id);
        console.log("props from handle click", props);
        props.handleVideoSelect(id);
    };

    return (
        <div>
            {props.videosData.map((video) => (
                <article
                    className="video-info-short"
                    id={video.id}
                    key={video.id}
                    onClick={() => handleClick(video.id)}>
                    <img
                        className="video-info-short__image"
                        src={video.image}
                        alt={video.title}
                    />
                    <div className="video-info-short__info">
                        <p className="video-info-short__title">{video.title}</p>
                        <p className="video-info-short__channel">
                            {video.channel}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default VideoInfoShort;
