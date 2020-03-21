import React from "react";
import { NavLink } from "react-router-dom";

const Videos = ({ vids, getVideoId }) => {
  return vids.map((vid, i) => {
    return (
      <NavLink exact to="/video">
        <div key={i}>
          <img
            src={vid.snippet.thumbnails.default.url}
            // style={{ width: "120px", height: "90px" }}
          ></img>
          <p>{vid.snippet.title}</p>
        </div>
      </NavLink>
    );
  });
};

export default Videos;
