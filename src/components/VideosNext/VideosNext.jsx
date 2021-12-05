/// --- VIDEOSNEXT.JSX --- ///
// -- IMPORT MODULES -- //
import React from 'react';

// -- IMPORT COMPONENTS -- //
import VideoInfoShort from "../VideoInfoShort/VideoInfoShort";
// -- IMPORT SCSS -- //
import "./VideosNext.scss";

// -- COMPONENT DECLARATION -- //


const VideosNext = (props) => {
  // console.log("props from videosnext", props);
  // console.log("videosnex allButselectedVideo", props.allButselectedVideo)
  // console.log("videosnex handlevideoselect", props.handleVideoSelect)
  return (
    <aside className="VideosNext">
    <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
    <VideoInfoShort  
        allButselectedVideo={props.allButselectedVideo} 
       
        // selectedVideo={props.selectedVideo}
        handleVideoSelect={props.handleVideoSelect}
        />
  </aside>
  );
};


export default VideosNext;

// class VideosNext extends Component {
//   state ={
//     videos : jsonData,
//     //selected video on pageload = first video (change this to be the video currently displayed? or is the displayed on always going to be the first one, probably, i should set it to be)
//     selectedVideo : jsonDataDetail[0], 
//   };

//   handleVideoClick = (id) => {
//     this.setState({
//       selectedVideo : jsonDataDetail.find((video) => video.id === id)
//     })
//   }

//   render() {

//     const filteredVideos = jsonData.filter((video) => video.id !== this.state.selectedVideo.id);
//       return (
//         <aside className="VideosNext">
//           <h3 className="VideosNext__section-title">NEXT VIDEOS</h3>
//           <video-info-short  filteredVideos={filteredVideos} selectedVideo={this.state.selectedVideo}/>
//         </aside>
//       );
//   }
// }

// export default VideosNext;


