/// --- HERO.JS --- ///
// -- IMPORT MODULES -- //
import React from 'react';
import Video from '../Video/Video';

// -- IMPORT COMPONENTS -- //
// import Date from "../Date/Date";
import VideoDetails from '../VideoDetails/VideoDetails';
import DividerLine from "./../DividerLine/DividerLine";
// import { useMatchMedia } from '../../functions/useMatchMedia';
// -- IMPORT SCSS -- //
import "./Hero.scss";


// -- COMPONENT DECLARATION -- //


const Hero = (props) => {

  const { title} = props.selectedVideo;


 
  return (

    <section className="Hero">

        <Video selectedVideo={props.selectedVideo}/>

        <article className="Hero__video-details">
          <h2 className="Hero__title">{title}</h2>
        <DividerLine addedDividerClass="Divider__hero"/>    
        <VideoDetails selectedVideo={props.selectedVideo} />
        </article>
    </section>
  
);
};

export default Hero;
