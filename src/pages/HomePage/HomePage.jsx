import React from 'react';

import Header from '../../components/Header/Header';
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments"
import VideosNext from "../../components/VideosNext/VideosNext";

const HomePage = (props) => {
  return (
    <>
    <Header/>
      
    <Hero 
    videosDetail={props.videosDetail} 
    selectedVideo={props.selectedVideo} 
    />
    <div className="main">
        <Comments 
        videosDetail={props.videosDetail} 
        selectedVideo={props.selectedVideo} 

        />
        <VideosNext 
            videosData={props.videosData} 
            videosDetail={props.videosDetail} 
            selectedVideo={props.selectedVideo} 
            allButselectedVideo={props.allButselectedVideo}
            handleVideoSelect={props.handleVideoSelect}
        />
    </div>
    </>
  );
};

export default HomePage;