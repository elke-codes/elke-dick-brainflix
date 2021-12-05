import React from 'react';

//-- IMPORT COMPONENTS -- //
import DeviderLine from '../DeviderLine/DeviderLine';

const VideoDetails = (props) => {

  const {channel, timestamp, views, likes, description } = props.firstSelectedVideo;

  return (
    <>
      <div className="Hero__info-container">
        <div className="Hero__info-left">
          <p className="Hero__channel">{channel}</p>
          <p className="Hero__date">{timestamp}</p>
        </div>
          <div className="Hero__info-right">
            
          <p className="Hero__views">{views}</p>
          <p className="Hero__likes">{likes}</p>
          </div>
      </div>
      <DeviderLine />
      <p className="Hero__description">{description}</p>
    </>
  );
};

export default VideoDetails;