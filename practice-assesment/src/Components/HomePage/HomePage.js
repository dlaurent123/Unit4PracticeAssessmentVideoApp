import React, { useState } from "react";
import axios from "axios";
import key from "../../apiKey";
import Videos from "../Videos/Videos";

const HomePage = ({ getVideoId }) => {
  const [searched, setSearched] = useState("false");
  const [input, setInput] = useState("");
  const [vids, setVids] = useState("");

  const search = async e => {
    e.preventDefault();
    let res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${input}&maxResults=8&key=${key}`
    );
    setVids(res.data.items);
    setSearched(true);
  };
  return (
    <div className="content">
      <div className="formContainer">
        <form onSubmit={search}>
          <input
            onChange={e => {
              setInput(e.target.value);
            }}
            style={{ width: "1000px", height: "24px" }}
            placeholder="Search..."
          ></input>
          <input
            style={{
              color: "white",
              backgroundColor: "rgb(204, 0, 0)",
              height: "31px",
              width: " 100px",
              borderRadius: " 7px"
            }}
            type="submit"
            value="Search"
          ></input>
        </form>
      </div>

      <div className="res">
        {searched === true ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Videos vids={vids} />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "rgb(212, 212, 212)",
                marginTop: "50px",
                width: "1000px",
                height: "40px",
                borderRadius: "2px"
              }}
            >
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "13px",
                  fontSize: "larger",
                  fontWeight: "200",
                  fontFamily: "monospace"
                }}
              >
                No Search Results Yet!, Please submit a search above
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
