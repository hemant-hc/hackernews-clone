import React, { useState, useEffect } from "react";
import { getStoryID } from "./hackernewsapi";
import { Story } from "./story";
import "./App.css";
export const Title = () => {
  return (
    <div className="heading">
      <img
        src="https://news.ycombinator.com/y18.gif"
        alt="img"
        className="icon"
      />
      <div className="heading-text">Hackerr News</div>
      <br></br>
      <br></br>
    </div>
  );
};
export const App = () => {
  const [storyIDs, setStoryIDs] = useState([]);
  useEffect(() => {
    getStoryID().then((data) => setStoryIDs(data));
  }, []);
  return storyIDs.map((storyID) => <Story storyID={storyID} />);
};
