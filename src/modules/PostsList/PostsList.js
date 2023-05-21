import React, { useEffect } from "react";
import PostForm from "./PostForm/PostForm";
import PostItem from "./PostItem/PostItem";
import "./PostsListStyles.css";
import { useSelector, useDispatch } from "react-redux";
import {fetchPosts } from "../../main/fetch/fetchPosts";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="postsList">
      <h2 className="postsList__header">PostsList</h2>
      <div className="posts">
        <ul className="posts__list">
          <h3 className="posts__form-header">Add New Post</h3>
          <div className="posts__forms">
            <PostForm />
          </div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostItem
                key={post.id}
                {...post}
              />
            ))
          ) : (
            <div>NO POSTS</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default PostsList;
