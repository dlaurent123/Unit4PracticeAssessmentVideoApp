import React, { useState } from "react";

const HomePage = () => {
  const [searched, setSearched] = useState("false");

  return (
    <div className="content">
      <div className="formContainer">
        <form>
          <input
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
      <div
        className="res"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {searched === true ? (
          <div> yes </div>
        ) : (
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
                fontSize: "smaller",
                fontWeight: "500"
              }}
            >
              No Search Results Yet! Please submit a search above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
