import React from "react";
import { Container, Navigation } from "./HeaderElements";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docHeight: 0,
      scrollPos: 0,
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
        <Navigation percentage={percentage}></Navigation>
      </Container>
    );
  }

  componentDidMount() {
    if (this.state.docHeight === 0) {
      this.setState({
        docHeight: document.body.scrollHeight - window.innerHeight,
        scrollPos: document.documentElement.scrollTop,
      });
    }

    document.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", () => this.handleScroll);
  }
}

export default Header;
