import {
  FETCH_USERS,
  NEW_USER,
  DELETE_USER,
  FETCH_USER_TODOS,
  FETCH_USER_POSTS,
  FETCH_USER_ALBUMS,
  LOAD_USER_LOADING,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from "../UserList/userConstants";

export const getUsers = (payload) => {
  return {
    type: FETCH_USERS,
    payload,
  };
};

export const loadingUser = () => {
  return {
    type: LOAD_USER_LOADING,
  };
};

export const loadUser = (user) => {
  return {
    type: LOAD_USER_SUCCESS,
    payload: user,
  };
};
export const loadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    payload: error,
  };
};

export const getUserTodos = (userTodos) => {
  return {
    type: FETCH_USER_TODOS,
    payload: userTodos,
  };
};

export const getUserPosts = (userPosts) => {
  return {
    type: FETCH_USER_POSTS,
    payload: userPosts,
  };
};

export const getUserAlbums = (userAlbums) => {
  return {
    type: FETCH_USER_ALBUMS,
    payload: userAlbums,
  };
};

export const addUser = (payload) => {
  return {
    type: NEW_USER,
    payload,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
