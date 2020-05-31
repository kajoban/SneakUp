import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo-container">
          <h1>
            Sneak<span>Up</span>
          </h1>
        </div>
        <ul className="navigation">
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>Bookmarks</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
