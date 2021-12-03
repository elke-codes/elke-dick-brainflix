/// --- HERO.JS --- ///
// -- IMPORT MODULES -- //
import React, { Component } from 'react';
// -- IMPORT DATA
import jsonData from "../../data/videos.json";
import jsonDataDetail from "../../data/video-details.json";
// -- IMPORT COMPONENTS -- //
// import Date from "../Date/Date";
import VideoDetails from './VideoDetails/VideoDetails';
import DeviderLine from "./../DeviderLine/DeviderLine";
// -- IMPORT SCSS -- //
import "./Hero.scss";


// -- COMPONENT DECLARATION -- //
class Hero extends Component {

  state = {
    videos : jsonDataDetail,
    selectedVideo : jsonDataDetail[0]
  }

  render() {

    return (
    
        <section className="Hero">
            {/* <Date /> */}
            <video className="Hero__video" src="" poster={this.state.selectedVideo.image}></video>

            <article className="Hero__video-details">
              <h2 className="Hero__title">{this.state.selectedVideo.title}</h2>
              <DeviderLine />
             <VideoDetails selectedVideo={this.state.selectedVideo}/>
            </article>
        </section>
      
    );
  }
}

export default Hero;