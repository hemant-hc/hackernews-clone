import React from "react";
import Comment from "./Comment";

const CommentsContainer = ({ commentIds = [] }) => {
  return commentIds.map((commentID) => (
    <Comment key={commentID} commentID={commentID} />
  ));
};

export default CommentsContainer;
