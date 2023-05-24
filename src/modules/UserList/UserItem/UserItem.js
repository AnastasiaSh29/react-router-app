import React from "react";
import "./UserItemStyles.css";

function UserItem({ name, username }) {
  return (
    <li className="userList__item">
      <div className="userList__image"></div>
      <div className="userList__content">
        <h4 className="userList__name">{name}</h4>
        <p className="userList__login">@{username}</p>
      </div>
    </li>
  );
}

export default UserItem;
