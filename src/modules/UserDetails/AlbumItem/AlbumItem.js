import React from "react";
import "./AlbumItemStyles.css";

function AlbumItem({ title }) {
  return (
    <li className="albums__item">
      <h2 className="albums__title">{title}</h2>
    </li>
  );
}

export default AlbumItem;
