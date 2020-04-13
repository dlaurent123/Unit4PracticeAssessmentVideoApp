import React, { useState } from "react";
import axios from "axios";
// import { apiKey } from "../../apiKey";
import apiKey2 from "../../apiKey";
// import { apiKey3 } from "../../apiKey";
import Videos from "../Videos/Videos";

const HomePage = ({ getVideoId }) => {
  const [searched, setSearched] = useState("false");
  const [input, setInput] = useState("");
  const [vids, setVids] = useState("");

  const search = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${input}&maxResults=8&key=${apiKey2}`
    );
    setVids(res.data.items);
    setSearched(true);
    // debugger;
  };
  return (
    <div className="content">
      <div className="formContainer">
        <form onSubmit={search}>
          <input
            className="inny"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            // style={{ width: "1000px", height: "24px" }}
            placeholder="Search..."
          ></input>
          <input className="put" type="submit" value="Search"></input>
        </form>
      </div>

      <div className="res">
        {searched === true ? (
          <div
            className="whole"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "center",
            }}
          >
            <Videos getVideoId={getVideoId} vids={vids} />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                // backgroundColor: "rgb(212, 212, 212)",
                backgroundColor: "lightcoral",
                marginTop: "50px",
                width: "1000px",
                height: "40px",
                borderRadius: "2px",
              }}
            >
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "13px",
                  fontSize: "larger",
                  fontWeight: "200",
                  fontFamily: "monospace",
                  textAlign: "center",
                }}
              >
                No search results yet! Please submit a search above
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
