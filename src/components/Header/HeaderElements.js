import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--clr-black);
  width: 5vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 2vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Navigation = styled.nav`
  background-color: transparent;
  width: 5px;
  height: 90vh;
  border: 1px solid var(--clr-white);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    background-color: var(--clr-white);
    width: 100%;
    height: ${({ percentage }) => `${percentage}%`};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.1s;
  }
`;
