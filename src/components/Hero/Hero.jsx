/// --- HERO.JS --- ///
// -- IMPORT MODULES -- //
import React, { Component } from 'react';

// -- IMPORT COMPONENTS -- //
// import Date from "../Date/Date";
import VideoDetails from './VideoDetails/VideoDetails';
import DeviderLine from "./../DeviderLine/DeviderLine";
// -- IMPORT SCSS -- //
import "./Hero.scss";


// -- COMPONENT DECLARATION -- //


const Hero = (props) => {
  console.log(props);
  const { image, title} = props.firstSelectedVideo;
  return (

    <section className="Hero">
        {/* <Date /> */}
        <video className="Hero__video" src="" poster={image}></video>

        <article className="Hero__video-details">
          <h2 className="Hero__title">{title}</h2>
          <DeviderLine />
         <VideoDetails firstSelectedVideo={props.firstSelectedVideo} videosDetails={props.videosDetails}/>
        </article>
    </section>
  
);
};

export default Hero;
