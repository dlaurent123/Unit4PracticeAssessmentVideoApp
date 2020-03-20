import React from "react";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
    </>
  );
}

export default App;
