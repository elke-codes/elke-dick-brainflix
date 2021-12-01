/// --- VIDEOSNEXT.JSX --- ///
import React from "react";
import VideoInfoShort from "./VideoInfoShort/VideoInfoShort";

// -- IMPORT SCSS -- //
import "./VideosNext.scss";

// -- COMPONENT DECLARATION -- //
const VideosNext = () => {
  return (
  <aside className="VideosNext">
    <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
    <VideoInfoShort />
  </aside>
  )

};

export default VideosNext;
