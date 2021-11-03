import React, { useState, useEffect } from "react";

import Story from "./Story";
import { getTopStories, getAllEntities } from "../api/hackernewsapi";

const StoriesContainer = () => {
  const [storiesContent, setStoriesContent] = useState([]);

  useEffect(() => {
    getTopStories().then((storyIds) => {
      getAllEntities(storyIds).then(setStoriesContent);
    });
  }, []);

  return (
    <ol>
      {storiesContent.map((story) => (
        <li key={story.id}>
          <Story story={story} />
        </li>
      ))}
    </ol>
  );
};

export default StoriesContainer;
