import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm/UserForm";
import UserItem from "./UserItem/UserItem";
import "./UserListStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../main/fetch/fetchUsers";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="userList">
      <h2 className="userList__header">Users List</h2>

      <ul className="userList__list">
        <h3 className="userList__form-header">Add New User</h3>
        <div className="userList__forms">
          {" "}
          <UserForm />
        </div>
        {users.length > 0 ? (
          users.map((user) => (
            <Link
              className="userList__link"
              to={`/users/${user.id}`}
              key={user.id}
            >
              <UserItem key={user.id} {...user} />
            </Link>
          ))
        ) : (
          <div>NO USERS</div>
        )}
      </ul>
    </div>
  );
}

export default UserList;
