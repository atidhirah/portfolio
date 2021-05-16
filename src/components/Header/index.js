import React from "react";
import {
  TopPage,
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
    <>
      <Container>
        <Nav className="container">
          <LogoWrapper>
            <Logo
              activeClass="active-link"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              Atidhira
            </Logo>
          </LogoWrapper>
          <NavLinks>
            <NavItem>
              <NavLink exact={true} activeClassName="active-nav" to="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active-nav" to="/blog">
                Blog
              </NavLink>
            </NavItem>
          </NavLinks>
        </Nav>
      </Container>
      <TopPage id="top" />
    </>
  );
};

export default Header;
