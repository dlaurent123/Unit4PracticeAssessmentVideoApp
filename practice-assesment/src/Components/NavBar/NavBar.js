import React from "react";
import { NavLink } from "react-router-dom";
import youtubeLogo from "../../Images/youtube-logo-png-clip-art.png";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          exact
          to="/"
        >
          Home
        </NavLink>{" "}
        <NavLink
          className="a"
          style={{ color: "white", textDecoration: "none" }}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
