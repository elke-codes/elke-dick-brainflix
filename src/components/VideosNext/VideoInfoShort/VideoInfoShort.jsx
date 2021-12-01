/// --- VideoInfoShort --- ///

import React from 'react';
// import image from "../../../data/data/videos.json"
import jsonData from "../../../data/data/videos.json";

// -- IMPORT SCSS -- //
import "./VideoInfoShort.scss";

// https://www.stechies.com/unexpected-token-o-json-position-1/
const convertData = JSON.stringify(jsonData) ;
console.log(convertData);
const videoData = JSON.parse(convertData);
console.log(videoData);

const VideoInfoShort = () => {
 
  return (
    
    <div> {videoData.map(video =><p>{video.title}</p>)}
    </div>
 
  );
}

export default VideoInfoShort;