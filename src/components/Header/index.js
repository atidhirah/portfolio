import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  Nav,
  LogoWrapper,
  Logo,
  NavLinks,
  NavItem,
  NavLink,
} from "./HeaderElements";

const Header = () => {
  return (
    <Container>
      <Nav className="container">
        <LogoWrapper>
          <Logo
            activeClass="active-link"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            Atidhira
          </Logo>
        </LogoWrapper>
        <NavLinks>
          <NavItem>
            <NavLink
              activeClass="active-link"
              to="works"
              spy={true}
              smooth={true}
              duration={500}
            >
              Works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </Container>
  );
};

export default Header;
