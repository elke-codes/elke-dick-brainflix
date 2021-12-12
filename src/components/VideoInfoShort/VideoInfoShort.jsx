/// --- VIDEOINFOSHORT JSX --- ///

import React from "react";
import { Link } from "react-router-dom";

// -- IMPORT SCSS -- //
import "./VideoInfoShort.scss";

// -- COMPONENT DECLARATION -- //

const VideoInfoShort = (props) => {
    const handleClick = () => {
        // https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+top+javascript
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {props.allButselectedVideo.map((video) => (
                <Link
                    to={`/videos/${video.id}`}
                    key={video.id}
                    onClick={handleClick}>
                    <article className="video-info-short" id={video.id}>
                        <img
                            className="video-info-short__image"
                            src={video.image}
                            alt={video.title}
                        />
                        <div className="video-info-short__info">
                            <p className="video-info-short__title">
                                {video.title}
                            </p>
                            <p className="video-info-short__channel">
                                {video.channel}
                            </p>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export default VideoInfoShort;
