import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumItem from "../AlbumItem/AlbumItem";
import "./UserAlbumsStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAlbums } from "../../../main/fetch/fetchUsers";

function UserAlbums() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userAlbums = useSelector((state) => state.userReducer.userAlbums);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [dispatch]);

  return (
    <div className="user-albums">
      <ul className="user-albums__list">
        {userAlbums.length > 0 ? (
          userAlbums.map((albums) => (
            <AlbumItem key={albums.id} id={albums.id} title={albums.title} />
          ))
        ) : (
          <div>NO POSTS</div>
        )}
      </ul>
    </div>
  );
}

export default UserAlbums;
