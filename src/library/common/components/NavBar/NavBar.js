import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `menu__link ${isActive ? "menu__link_active" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          `menu__link ${isActive ? "menu__link_active" : ""}`
        }
      >
        PostsList
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) =>
          `menu__link ${isActive ? "menu__link_active" : ""}`
        }
      >
        TodoList
      </NavLink>
    </nav>
  );
}

export default NavBar;
