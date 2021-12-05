import React from 'react';
import "./Video.scss";

const Video = (props) => {

  console.log("props from video: ", props);

  const { image } = props.selectedVideo;
  return (
    <div className="video-container">
      <video className="video-container__video" src="" poster={image}></video>
</div>
  );
};

export default Video;