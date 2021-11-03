import { useParams } from "react-router";
import React, { useState, useEffect } from "react";

import CommentsContainer from "./CommentsContainer";
import { getEntity } from "../api/hackernewsapi";

import "./Comment.css";

const CommentsPage = () => {
  const { storyId } = useParams();
  const [commentIds, setCommentIds] = useState([]);

  useEffect(() => {
    getEntity(storyId).then((data) => setCommentIds(data.kids));
  }, [storyId]);

  return (
    <div className="comments-container-wrapper">
      <CommentsContainer commentIds={commentIds} />
    </div>
  );
};

export default CommentsPage;
