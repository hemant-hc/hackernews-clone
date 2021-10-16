import React, { useState, useEffect } from "react";
import { getStoryID } from "./hackernewsapi";
import { Story } from "./story";
import "./App.css";
import iconImage from "./y18.gif";
export const Title = () => {
  return (
    <div className="heading">
      <img src={iconImage} alt="img" className="icon" />
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
