import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  flex-basis: 50%;
`;

export const ImageWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 250px;
  filter: grayscale(90);
  box-shadow: 3px 3px 0 0 white, 7px 7px 0 0 black;

  &:hover {
    filter: none;
  }
`;
