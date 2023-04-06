import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">Header</div>
      <NavBar />
    </div>
  );
}

export default Header;
