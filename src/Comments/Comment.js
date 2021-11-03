import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import CommentsContainer from "./CommentsContainer";
import { getEntity } from "../api/hackernewsapi";
import { mapTime } from "../utils/mapTime";

const Comment = ({ commentID }) => {
  const [comment, setComment] = useState({});
  const [collapsedComments, setCollapsedComments] = useState(0);

  useEffect(() => {
    getEntity(commentID).then(setComment);
  }, [commentID]);

  if (Object.keys(comment).length === 0 || comment.deleted) {
    return null;
  }

  return (
    <div>
      <div className="comment-sub-text">
        {comment.by} |{" "}
        <Link className="nested-comment-link" to={`/comments/${comment.id}`}>
          {mapTime(comment.time)} ago
        </Link>{" "}
        |{" "}
        <span
          className="link"
          onClick={() =>
            setCollapsedComments(
              collapsedComments === 0 ? comment.kids?.length || 0 : 0
            )
          }
        >
          {collapsedComments === 0
            ? "[–]"
            : `(${comment.kids?.length || 0} more)`}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.text }} />
      <div
        className={classnames("nested-comments", {
          "nested-comments-hidden": collapsedComments > 0,
        })}
      >
        <CommentsContainer commentIds={comment.kids} />
      </div>
    </div>
  );
};

export default Comment;
