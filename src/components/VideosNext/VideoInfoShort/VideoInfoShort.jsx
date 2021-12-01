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
    
    <div> {videoData.map(video =>(
    <>
        <p className="VideoInfoShort__title">{video.title}</p>
        <p className="VideoInfoShort__channel">{video.channel}</p>
        <img 
        className="VideoInfoShort__image"
        src={video.image} 
        />
    </>
        )
        
        )}
    </div>
 
  );
}

export default VideoInfoShort;