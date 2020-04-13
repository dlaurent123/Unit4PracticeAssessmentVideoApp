import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import apiKey2 from "../../apiKey";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

const VideoPage = ({ videoId }) => {
  const [title, setTitle] = useState("");
  const [pubDate, setPubdate] = useState("");
  const [views, setViewCount] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey2}`
        );
        // debugger;
        setTitle(res.data.items[0].snippet.title);
        setPubdate(res.data.items[0].snippet.publishedAt);
        setViewCount(res.data.items[0].statistics.viewCount);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    //eslint - disable - next - line;
  }, [videoId]);
  // console.log(item);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      origin: "https//localhost300",
      autoplay: 1,
    },
  };

  return (
    <div className="video">
      <Youtube className="tubby" videoId={videoId} opts={opts}></Youtube>
      <div className="contentt">
        <div className="helper">
          <strong className="tite">{title}</strong>
          <p className="views">
            <NumberFormat
              displayType={"text"}
              value={views}
              thousandSeparator={true}
            ></NumberFormat>{" "}
            views |{" "}
            <Moment format="MMM D YYYY" withTitle>
              {pubDate}
            </Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
