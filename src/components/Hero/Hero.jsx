/// --- HERO.JS --- ///
// -- IMPORT MODULES -- //
import React from 'react';
import Video from '../Video/Video';

// -- IMPORT COMPONENTS -- //
// import Date from "../Date/Date";
import VideoDetails from '../VideoDetails/VideoDetails';
import DeviderLine from "./../DeviderLine/DeviderLine";
import { useMatchMedia } from '../../functions/useMatchMedia';
// -- IMPORT SCSS -- //
import "./Hero.scss";


// -- COMPONENT DECLARATION -- //


const Hero = (props) => {

  const { image, title} = props.selectedVideo;
  const isMobileResolution = window.matchMedia('(max-width:767px)');

 
  return (

    <section className="Hero">

        <Video selectedVideo={props.selectedVideo}/>

        <article className="Hero__video-details">
          <h2 className="Hero__title">{title}</h2>
        {/* {isMobileResolution 
        ? <DeviderLine />
        : null
        } */}
        <VideoDetails selectedVideo={props.selectedVideo} />
        </article>
    </section>
  
);
};

export default Hero;
