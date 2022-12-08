import React, { useState } from "react";
import "./index.css";
// var likeCounter=0;

export default function App() {
  var [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
    // console.log("likeCounter", likeCounter);
    // likeCounter = likeCounter + 1;
    // console.log("clicked", likeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#5b21b6" }}>Welcome to LikeCounter</h1>
      <button onClick={likeClickHandler}> Like💗</button> {likeCounter}
    </div>
  );
}
