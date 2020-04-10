import React, { useEffect } from "react";
import axios from "axios";
import Youtube from "react-youtube";

const VideoPage = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <div>
      Video
      <Youtube videoId={videoId} opts={opts} onReady={onReady}></Youtube>
    </div>
  );
};

export default VideoPage;
