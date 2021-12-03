/// --- VideoInfoShort --- ///

import React from 'react';
// import React, { Component } from 'react';
// import jsonData from "../../../data/videos.json";
// import jsonDataDetail from "../../../data/video-details.json";

// -- IMPORT SCSS -- //
import "./VideoInfoShort.scss";


// -- GLOBAL VARIABLES -- //

// // https://www.stechies.com/unexpected-token-o-json-position-1/
// const convertData = JSON.stringify(jsonData) ;
// // console.log(convertData);
// const videos = JSON.parse(convertData);

// console.log("typeof videoData: ", typeof videoData);

// console.log(videoData);

const handleClick=(id) =>{
  console.log("clicked", id);
}

const VideoInfoShort = (props) => {

  const { id, image, title, channel } = props.allButCurrentVideo;

// console.log(props)
    return (
      <div> {props.allButCurrentVideo.map(video =>(
        <article className="VideoInfoShort" id={video.id} key={video.id} onClick={() => handleClick(video.id)} >
         {/* { console.log(video.id)} */}
            <img 
            className="VideoInfoShort__image"
            src={video.image} 
            />
            <div className="VideoInfoShort__info">
                <p className="VideoInfoShort__title">{video.title}</p>
                <p className="VideoInfoShort__channel">{video.channel}</p>
            </div>
        </article>
        )
        
        )}
    </div>
    );
};

// export default VideoInfoShort;
// class VideoInfoShort extends Component {



//   render() {
//   console.log(this.state.videos);
  
 
//   }
// }

export default VideoInfoShort;