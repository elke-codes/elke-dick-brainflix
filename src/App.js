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





// -- COMPONENT DECLARATION -- //


class App extends Component {

  state = {
    videosDetail : jsonDataDetail,
    videosData: jsonData,
    selectedVideo : jsonDataDetail[0],
  
  }

  handleVideoSelect = id => {
      this.setState({
          selectedVideo : jsonDataDetail.find((video) => video.id === id)
        });

        // not in the requirements but so much nicer ux than having to scroll to the top yourself
        // https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+top+javascript
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
         });
      };

  

  render() {
 

    let buttonText = "";

    const allButselectedVideo = this.state.videosData.filter((video) => video.id !== this.state.selectedVideo.id);

    console.log("allButselectedVideo",allButselectedVideo);

    return (
      <>
        <Header 
        buttonText={buttonText} />
        <Hero 
        videosDetail={this.state.videosDetail} 
        selectedVideo={this.state.selectedVideo} />
        <Comments 
        videosDetail={this.state.videosDetail} 
        selectedVideo={this.state.selectedVideo} 
        buttonText={this.state.buttonText}/>
        
        <VideosNext 
            videosData={this.state.videosData} 
            videosDetail={this.state.videosDetail} 
            selectedVideo={this.state.selectedVideo} 
            allButselectedVideo={allButselectedVideo}
            handleVideoSelect={this.handleVideoSelect}
        />
      </>
    );
  }
}




export default App;
