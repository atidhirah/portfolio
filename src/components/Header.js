import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const links = ["works", "about"];
  const linksElem = links.map((text) => {
    return (
      <li className="nav-item">
        <Link
          className="nav-link"
          activeClass="active"
          to={text}
          spy={true}
          smooth={true}
          duration={500}
        >
          {text}
        </Link>
      </li>
    );
  });

  return (
    <header id="header">
      <nav className="nav container">
        <div className="nav-logo">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>Atidhira</span>
          </Link>
        </div>
        <ul className="nav-links">{linksElem}</ul>
      </nav>
    </header>
  );
};

export default Header;
