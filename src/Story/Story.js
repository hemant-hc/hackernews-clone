import React from "react";
import { Link } from "react-router-dom";

import { mapTime } from "../utils/mapTime";

import "./Story.css";

const Story = ({ story }) => {
  if (Object.keys(story).length === 0) {
    return null;
  }

  return (
    <div>
      <div>
        <a className="story-link" href={story.url}>
          {story.title}{" "}
        </a>
        <span className="story-sub-text">
          ({new window.URLPattern(story.url).hostname})
        </span>
      </div>
      <div className="story-sub-text">
        {story.score} points | By: {story.by} | Posted: {mapTime(story.time)} |
        descendants: {story.descendants} |{" "}
        <Link className="" to={`/comments/${story.id}`}>
          comments
        </Link>
      </div>
    </div>
  );
};

export default Story;
