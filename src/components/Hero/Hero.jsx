/// --- HERO.JS --- ///
// -- IMPORT MODULES -- //
import React from 'react';
import Video from '../Video/Video';

// -- IMPORT COMPONENTS -- //
// import Date from "../Date/Date";
import VideoDetails from '../VideoDetails/VideoDetails';
import DeviderLine from "./../DeviderLine/DeviderLine";
// -- IMPORT SCSS -- //
import "./Hero.scss";


// -- COMPONENT DECLARATION -- //


const Hero = (props) => {
  console.log(props);
  const { image, title} = props.selectedVideo;
  return (

    <section className="Hero">
        {/* <Date /> */}
        <Video selectedVideo={props.selectedVideo}/>

        <article className="Hero__video-details">
          <h2 className="Hero__title">{title}</h2>
        <DeviderLine />
        <VideoDetails selectedVideo={props.selectedVideo} />
        </article>
    </section>
  
);
};

export default Hero;
