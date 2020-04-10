import React, { useState } from "react";

import "./reset.css";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import VideoPage from "./Components/VideoPage/VideoPage";
import { Route } from "react-router-dom";

function App() {
  const [videoId, setVideoId] = useState("");
  const getVideoId = (id) => {
    setVideoId(id);
  };
  return (
    <>
      <NavBar />
      <Route exact path="/">
        <HomePage getVideoId={getVideoId} />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/video">
        <VideoPage videoId={videoId} />
      </Route>
    </>
  );
}

export default App;
