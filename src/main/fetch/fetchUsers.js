import {
  getUsers,
  addUser,
  deleteUser,
  getUserTodos,
  getUserPosts,
  getUserAlbums,
  loadingUser,
  loadUser,
  loadUserError,
} from "../../modules/UserList/userActions";

export const fetchUsers = () => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => dispatch(getUsers(users)));
  };
};

export const fetchUser = (id) => {
  return function (dispatch) {
    dispatch(loadingUser());
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(
        (user) => dispatch(loadUser(user)),
        (error) =>
          dispatch(
            loadUserError({ error: error.message || "Unexpected Error!!!" })
          )
      );
  };
};

export const fetchUserTodos = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`, {})
      .then((res) => res.json())
      .then((userTodos) => dispatch(getUserTodos(userTodos)));
  };
};

export const fetchUserPosts = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {})
      .then((res) => res.json())
      .then((userPosts) => dispatch(getUserPosts(userPosts)));
  };
};

export const fetchUserAlbums = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`, {})
      .then((res) => res.json())
      .then((userAlbums) => dispatch(getUserAlbums(userAlbums)));
  };
};

export const fetchAddUser = (userData) => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(
        (user) => dispatch(addUser(user)),
      (error) =>dispatch(loadUserError({ error: error.message || "Unexpected Error!!!" })
          )
      );
  };
};

export const fetchDeleteUser = (payload) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((id) => dispatch(deleteUser({ id: payload.id })));
  };
};
