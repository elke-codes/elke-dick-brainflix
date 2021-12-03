import React from 'react';

const VideoDetails = (props) => {

  const {channel, timestamp, views, likes, description } = props.selectedVideo;

  return (
    <>
      <div className="Hero__info-container">
          <p className="Hero__channel">{channel}</p>
          <p className="Hero__date">{timestamp}</p>
          <p className="Hero__views">{views}</p>
          <p className="Hero__likes">{likes}</p>
      </div>
      <p className="Hero__description">{description}</p>
    </>
  );
};

export default VideoDetails;