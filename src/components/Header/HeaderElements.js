import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.header`
  background-color: transparent; //var(--clr-background);
  width: 5vw;
  min-width: 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 2vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Navigation = styled.nav`
  background-color: var(--clr-text);
  width: 1px;
  height: 85vh;
  position: relative;

  &:before {
    content: "";
    background-color: var(--clr-text);
    width: 2px;
    height: ${({ percentage }) => `${percentage}%`};
    position: absolute;
    top: 0;
    left: -1px;
  }
`;

export const NavLinks = styled.ul`
  width: 1px;
  height: 100%;
  background-color: transparent;
  position: relative;
`;

export const NavItem = styled.li`
  list-style: none;
  writing-mode: vertical-rl;
  position: absolute;
  top: ${({ pos }) => `${pos}%`};
  left: 0;
  transform: ${({ pos }) =>
    pos === 0
      ? "translate(-100%, 0)"
      : pos >= 95
      ? "translate(-100%, -100%)"
      : "translate(-100%, -50%)"};
`;

export const NavLink = styled(Link)`
  font-size: 0.7rem;
  cursor: pointer;
`;
