import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserDetailsStyles.css";
import TabsContainer from "../UserDetails/TabsContainer/TabsContainer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../main/fetch/fetchUsers";

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pathname = window.location.pathname.split('/')[2]
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(fetchUser(pathname));
  }, [pathname]);



  return (
    loading ? 'Loading' :
    <div className="userDetails">
      <h2 className="userDetails__header">User Details (id:{id})</h2>

      <div className="userDetails__content">
        {user ? (
          <div>
            <ul className="userDetails__list">
              <li className="userDetails__item">
                <div className="img img__mail"></div>
                <div className="userDetails__wr-info">
                  <p className="userDetails__data">{user.email}</p>
                  <p className="userDetails__info">Email</p>
                </div>
              </li>
              <li className="userDetails__item">
                <div className="img img__phone"></div>
                <div className="userDetails__wr-info">
                  <p className="userDetails__data">{user.phone}</p>
                  <p className="userDetails__info">Mobile</p>
                </div>
              </li>

              <li className="userDetails__item">
                <div className="img img__location"></div>
                <div className="userDetails__wr-info">
                  <p className="userDetails__data">{user.company.name}</p>
                  <p className="userDetails__info">Work</p>
                </div>
              </li>

              <li className="userDetails__item">
                <div className="img img__web"></div>
                <div className="userDetails__wr-info">
                  <p className="userDetails__data">{user.website}</p>
                  <p className="userDetails__info">Social Channels</p>
                </div>
              </li>
              <li className="userDetails__item">
                <div className="img img__chart"></div>
                <div className="userDetails__wr-info">
                  <p className="userDetails__data">{user.company.bs}</p>
                  <p className="userDetails__info">Segments</p>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <p>No User found.</p>
        )}
        <TabsContainer />
      </div>
    </div>
  );
};

export default UserDetails;
