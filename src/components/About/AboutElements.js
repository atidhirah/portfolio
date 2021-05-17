import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row1 = styled.div`
  flex-basis: 50%;
  position: relative;
  z-index: 10;
`;

export const H3 = styled.h3`
  letter-spacing: 2px;
`;
export const H1Wrapper = styled.div``;
export const H1 = styled.h1`
  span {
    display: block;
    width: 100%;
    font-size: 2rem;
  }
`;

export const Row2 = styled.div`
  flex-basis: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 0;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  margin-top: -1.5rem;
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;

  span {
    display: inline-block;
    margin-left: 25px;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactList = styled.ul`
  width: 50%;
`;

export const Item = styled.li`
  list-style: none;
  width: 100%;
`;

export const Link = styled.a`
  color: var(--clr-white);
  text-decoration: none;
  font-size: 0.8rem;
  width: 100%;
  padding: 0.3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  transition: var(--transition, 0.3s);

  span {
    font-size: 0.7rem;
  }

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--clr-white);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: var(--transition, 0.3s);
  }

  &:hover {
    color: var(--clr-black);
    padding: 0.3rem 1rem;
    &:before {
      height: 100%;
    }
  }
`;
