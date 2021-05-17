import React from "react";
import {
  Container,
  Row1,
  H3,
  H1Wrapper,
  H1,
  Row2,
  Image,
  TextWrapper,
  ContactWrapper,
  ContactList,
  Item,
  Link,
} from "./AboutElements";

import MyImage from "../../images/my-photo.jpg";

const About = () => {
  return (
    <Container id="about" className="container section">
      <Row1>
        <H3>Hello!</H3>
        <H1Wrapper>
          <H1>
            <span>I'm Atidhira,</span>
            <span>a Website developer</span>
            <span>based in Indonesia</span>
          </H1>
        </H1Wrapper>
      </Row1>
      <Row2>
        <Image src={MyImage} />
        <TextWrapper>
          <p>
            <span></span>My name is Atidhira Habibillah, i've been learning
            website development independently since January 2021 and still going
            until now. I'm still new and inexperienced on this field, but my
            love of coding help me deal with problems on every project i
            created.
          </p>
        </TextWrapper>
        <ContactWrapper>
          <H1>
            <span>GET IN</span>
            <span>TOUCH</span>
          </H1>
          <ContactList>
            <Item>
              <Link href="https://github.com/atidhirah" target="_blank">
                Github <span>Link</span>
              </Link>
            </Item>
            <Item>
              <Link href="https://twitter.com/AtidhiraH" target="_blank">
                Twitter <span>Link</span>
              </Link>
            </Item>
            <Item>
              <Link
                href="https://www.facebook.com/profile.php?id=100067829170133"
                target="_blank"
              >
                Facebook <span>Link</span>
              </Link>
            </Item>
            <Item>
              <Link href="https://www.instagram.com/atidhirah/" target="_blank">
                Instagram <span>Link</span>
              </Link>
            </Item>
            <Item>
              <Link href="https://github.com/atidhirah" target="_blank">
                Email <span>Copy</span>
              </Link>
            </Item>
          </ContactList>
        </ContactWrapper>
      </Row2>
    </Container>
  );
};

export default About;
