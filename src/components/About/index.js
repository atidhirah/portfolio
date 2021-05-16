import React from "react";
import { Container, TextWrapper, ImageWrapper, Image } from "./AboutElements";

import MyImage from "../../images/my-photo.jpg";

const About = () => {
  return (
    <Container id="about" className="container section">
      <TextWrapper>ABOUT</TextWrapper>
      <ImageWrapper>
        <Image src={MyImage} />
      </ImageWrapper>
    </Container>
  );
};

export default About;
