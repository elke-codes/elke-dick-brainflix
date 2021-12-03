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
    selectedVideo : jsonDataDetail[0]
  }


  render() {
    return (
      <>
      <Header />
      <Hero videosDetail={this.state.videosDetail} selectedVideo={this.state.selectedVideo}/>
      <Comments />
      <VideosNext />
      <Button />
    </>
    );
  }
}




export default App;
