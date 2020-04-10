import React from "react";
import { NavLink } from "react-router-dom";

const Videos = ({ vids, getVideoId }) => {
  const clickHandler = (e) => {
    // let id = e.target.__reactEventHandlers$bm4ljxys8xa.value;
    debugger;
    getVideoId(e._targetInst.memoizedProps.value);
  };
  return vids.map((vid, i) => {
    return (
      <div onClick={clickHandler} key={vid.id.videoId} className="vidDiv">
        <div className="vidCon">
          <NavLink className="aa" exact to="/video">
            <div value={vid.id.videoId} className="rap">
              <img
                value={vid.id.videoId}
                alt=""
                src={vid.snippet.thumbnails.medium.url}
              ></img>
              <p className="pp">{vid.snippet.title}</p>
            </div>
          </NavLink>
        </div>
      </div>
    );
  });
};

export default Videos;
