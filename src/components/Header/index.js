import React from "react";
import {
  Container,
  Navigation,
  NavLinks,
  NavItem,
  NavLink,
} from "./HeaderElements";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docHeight: 0,
      scrollPos: 0,
      linksPos: {},
    };
  }

  handleScroll() {
    this.setState({
      scrollPos: document.documentElement.scrollTop,
    });
  }

  render() {
    let percentage = (this.state.scrollPos / this.state.docHeight) * 100 || 0;

    return (
      <Container>
        <Navigation percentage={percentage}>
          <NavLinks>
            <NavItem pos={this.state.linksPos.top}>
              <NavLink
                to="top"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                duration={500}
              >
                Top
              </NavLink>
            </NavItem>
            <NavItem pos={this.state.linksPos.about}>
              <NavLink
                to="about"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem pos={this.state.linksPos.works}>
              <NavLink
                to="works"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                duration={500}
              >
                Works
              </NavLink>
            </NavItem>
          </NavLinks>
        </Navigation>
      </Container>
    );
  }

  componentDidMount() {
    if (this.state.docHeight === 0) {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const aboutPos = document.getElementById("about").offsetTop;
      const worksPos = document.getElementById("works").offsetTop;

      this.setState({
        docHeight: docHeight,
        scrollPos: document.documentElement.scrollTop,
        linksPos: {
          top: 0,
          about: (aboutPos / docHeight) * 100,
          works: (worksPos / docHeight) * 100,
        },
      });
    }

    document.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", () => this.handleScroll);
  }
}

export default Header;
