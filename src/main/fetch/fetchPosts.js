import {getPosts, addPost, deletePost } from '../../modules/PostsList/postActions'

export const fetchPosts = () => {
    return function (dispatch) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((posts) => dispatch(getPosts(posts)));
    };
  };
  
  export const fetchAddPost = (postData) => {
    return function (dispatch) {
      fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((post) => dispatch(addPost(post)));
    };
  };
  
  export const fetchDeletePost = (payload) => {
    return function (dispatch) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((id) => dispatch(deletePost({ id: payload.id })));
    };
  };