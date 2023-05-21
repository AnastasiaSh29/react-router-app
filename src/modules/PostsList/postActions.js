import {FETCH_POSTS, NEW_POST, DELETE_POST} from "../PostsList/postConstants";

export const getPosts = (payload) => {
    return {
      type: FETCH_POSTS,
      payload,
    };
  };
  
  export const addPost = (payload) => {
    return {
      type: NEW_POST,
      payload,
    };
  };
  
  export const deletePost= (id) => {
    return {
      type: DELETE_POST,
      payload: id,
    };
  };