/// --- VIDEOSNEXT JSX --- ///

// -- IMPORT MODULES -- //
import React from "react";
// -- IMPORT COMPONENTS -- //
import VideoInfoShort from "../VideoInfoShort/VideoInfoShort";
// -- IMPORT SCSS -- //
import "./VideosNext.scss";

// -- COMPONENT DECLARATION -- //

const VideosNext = (props) => {
    console.log("props from videosnext", props);
    return (
        <aside className="VideosNext">
            <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
            <VideoInfoShort
                // allButselectedVideo={props.allButselectedVideo}
                videosData={props.videosData}
                handleVideoSelect={props.handleVideoSelect}
            />
        </aside>
    );
};

export default VideosNext;
