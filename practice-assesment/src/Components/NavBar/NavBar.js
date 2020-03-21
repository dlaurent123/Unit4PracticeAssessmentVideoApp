import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <NavLink
          className="tube"
          style={{ color: "white", textDecoration: "none" }}
          exact
          to="/"
        >
          Youtube
        </NavLink>{" "}
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
