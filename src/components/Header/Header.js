import React from "react";
import logo from "../../images/download.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="Header-nav">
        <img src={logo} alt="" />
        <h2>Do Some Exercise</h2>
      </nav>
    </div>
  );
};

export default Header;
