import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="header">
      <nav className="nav container">
        <div className="nav-logo">
          <span>Atidhira</span>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="works">
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
