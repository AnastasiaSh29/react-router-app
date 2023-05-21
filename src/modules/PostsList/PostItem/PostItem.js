import React from "react";
import "./PostItemStyles.css";

function PostItem({ title, body }) {
  return (
    <li className="posts__item">
      <h2 className="posts__title">{title}</h2>
      <p className="posts__body">{body}</p>
    </li>
  );
}

export default PostItem;
