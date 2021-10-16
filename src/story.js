import React, { useState, useEffect } from "react";
import { getStory } from "./hackernewsapi";
import "./App.css";
import { mapTime } from "./mapTime";

export const Story = ({ storyID }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyID).then(({ data }) => setStory(data));
  }, []);

  return (
    <div className="body">
      <div className="news-title">
        <a className="story-link" href={story.url}>
          {story.title}
        </a>
      </div>

      <p className="info">
        {story.score} points | By: {story.by} | Posted: {mapTime(story.time)}
      </p>
    </div>
  );
};
