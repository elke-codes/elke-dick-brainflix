/// --- APP.JS --- ///

// -- IMPORT SCSS -- //
import "./App.scss";

// -- IMPORT MODULES --//
import React, { Component } from "react";

// -- IMPORT DATA
import jsonData from "./data/videos.json";
import jsonDataDetail from "./data/video-details.json";

// -- IMPORT COMPONENTS -- //

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

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

    const allButselectedVideo = this.state.videosData.filter((video) => video.id !== this.state.selectedVideo.id);

    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact> 
            <HomePage   
            videosData={this.state.videosData} 
            videosDetail={this.state.videosDetail} 
            selectedVideo={this.state.selectedVideo} 
            allButselectedVideo={allButselectedVideo}
            handleVideoSelect={this.handleVideoSelect}/>
          </Route>
          <Route path="/upload"> 
             <VideoUploadPage selectedVideo={this.state.selectedVideo} />
          </Route>
        </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
