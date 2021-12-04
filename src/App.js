/// --- APP.JS --- ///

// -- IMPORT SCSS -- //
import "./App.scss";

// -- IMPORT MODULES --//
import React, { Component } from "react";

// -- IMPORT DATA
import jsonData from "./data/videos.json";
import jsonDataDetail from "./data/video-details.json";

// -- IMPORT COMPONENTS -- //
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments"
import VideosNext from "./components/VideosNext/VideosNext";
import Button from "./components/Button/Button";




// -- COMPONENT DECLARATION -- //


class App extends Component {

  state = {
    videosDetail : jsonDataDetail,
    firstSelectedVideo : jsonDataDetail[0],
    videosData: jsonData
  }

  // handleVideoClick = (id) => {
    //     this.setState({
    //       firstSelectedVideo : jsonDataDetail.find((video) => video.id === id)
    //     })
    //   }

  render() {
    // console.log("data from app",this.state.videosData)
    // TODO
    //this doesn t seem needed anymore. can just make first selected video back into selected video and update de state of it. 
    //use find? returns single value
    // see codealong findindex etc
    const currentVideo = this.state.videosDetail.filter((video) => video.id === this.state.firstSelectedVideo.id);

    // console.log("currentvideo?:" ,currentVideo[0].id)
    const allButCurrentVideo = this.state.videosData.filter((video) => video.id !== currentVideo[0].id);
    // console.log("allButCurrentVideo",allButCurrentVideo);
    return (
      <>
        <Header />
        <Hero videosDetail={this.state.videosDetail} firstSelectedVideo={this.state.firstSelectedVideo}/>
        <Comments videosDetail={this.state.videosDetail} firstSelectedVideo={this.state.firstSelectedVideo} currentVideo={currentVideo} />
        <VideosNext 
            videosData={this.state.videosData} 
            videosDetail={this.state.videosDetail} 
            firstSelectedVideo={this.state.firstSelectedVideo} 
            currentVideo={currentVideo} 
            allButCurrentVideo={allButCurrentVideo}
        />
      </>
    );
  }
}




export default App;
