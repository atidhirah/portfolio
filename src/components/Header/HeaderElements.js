import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const TopPage = styled.div``;

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(LinkS)`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(LinkR)`
  color: var(--clr-white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.85rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;
