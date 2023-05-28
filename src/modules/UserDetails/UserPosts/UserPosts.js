import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../../PostsList/PostItem/PostItem";
import "./UserPostsStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserPosts } from "../../../main/fetch/fetchUsers";

function UserPosts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.userReducer.userPosts);

  useEffect(() => {
    dispatch(fetchUserPosts(id));
  }, [dispatch]);

  return (
    <div className="user-posts">
      <ul className="user-posts__list">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        ) : (
          <div>NO POSTS</div>
        )}
      </ul>
    </div>
  );
}

export default UserPosts;
