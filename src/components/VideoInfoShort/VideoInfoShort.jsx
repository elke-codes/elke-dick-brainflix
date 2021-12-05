/// --- VideoInfoShort --- ///

import React from 'react';
// import React, { Component } from 'react';
// import jsonData from "../../../data/videos.json";
// import jsonDataDetail from "../../../data/video-details.json";

// -- IMPORT SCSS -- //
import "./VideoInfoShort.scss";


// -- GLOBAL VARIABLES -- //


// -- COMPONENT DECLARATION -- // 

const VideoInfoShort = (props) => {

  
  const handleClick= (id)=>{
    props.handleVideoSelect(id)
  }

    return (
      <div> {props.allButselectedVideo.map(video =>(
        <article 
        className="video-info-short" 
        id={video.id} 
        key={video.id} 
        onClick={() => handleClick(video.id)} 
      
        >
         { console.log(video.id)}
            <img 
            className="video-info-short__image"
            src={video.image} 
            alt={video.title}
            />
            <div className="video-info-short__info">
                <p className="video-info-short__title">{video.title}</p>
                <p className="video-info-short__channel">{video.channel}</p>
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