import React from "react";
import "./Header.scss";
import { BsCart4, BsCaretDownFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
function Header() {
  return (
    <div className="Header _container">
      <div className="Header__logo">
        <img
          src="/logo.png"
          alt="logo"
          className="_ptr"
          onClick={() => {
            Navigator.push("/");
       }}
        />
      </div>
      <div className="Header__searchBar"></div>
      <div className="Header__profileContainer">
        <span className="icon">
          <BsCart4 />
        </span>
        <span className="icon">
          <CgProfile />
          <BsCaretDownFill />
        </span>
      </div>
    </div>
  );
}

export default Header;
