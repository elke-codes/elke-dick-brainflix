/// --- VIDEOSNEXT.JSX --- ///
// -- IMPORT MODULES -- //
import React from 'react';
// -- IMPORT DATA
import jsonData from "../../data/videos.json";
import jsonDataDetail from "../../data/video-details.json";
// -- IMPORT COMPONENTS -- //
import VideoInfoShort from "./VideoInfoShort/VideoInfoShort";
// -- IMPORT SCSS -- //
import "./VideosNext.scss";

// -- COMPONENT DECLARATION -- //


const VideosNext = (props) => {
  console.log(props);
  return (
    <aside className="VideosNext">
    <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
    <VideoInfoShort  
        allButCurrentVideo={props.allButCurrentVideo} 
        // firstSelectedVideo={this.state.firstSelectedVideo}
        />
  </aside>
  );
};


export default VideosNext;

// class VideosNext extends Component {
//   state ={
//     videos : jsonData,
//     //selected video on pageload = first video (change this to be the video currently displayed? or is the displayed on always going to be the first one, probably, i should set it to be)
//     firstSelectedVideo : jsonDataDetail[0], 
//   };

//   handleVideoClick = (id) => {
//     this.setState({
//       firstSelectedVideo : jsonDataDetail.find((video) => video.id === id)
//     })
//   }

//   render() {

//     const filteredVideos = jsonData.filter((video) => video.id !== this.state.firstSelectedVideo.id);
//       return (
//         <aside className="VideosNext">
//           <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
//           <VideoInfoShort  filteredVideos={filteredVideos} firstSelectedVideo={this.state.firstSelectedVideo}/>
//         </aside>
//       );
//   }
// }

// export default VideosNext;


