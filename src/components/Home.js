import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const textArray = [
  "Välkommen till",
  "Tervetuloa",
  "Welcome to",
  "Bienvenido a",
  "Willkommen zu",
];

export default class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3500);
  }

  // componentDidUnmount() {
  //   clearInterval(this.timeout);
  // }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      // <Container style={{ maxWidth: "800px" }} className="home">
      //   <Carousel>
      //     <Carousel.Item>
      //       <img
      //         className="d-block w-100"
      //         src="https://loremflickr.com/800/400/forest"
      //         alt="First slide"
      //       />
      //       <Carousel.Caption>
      //         <h3>Naturnära</h3>
      //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //     <Carousel.Item>
      //       <img
      //         className="d-block w-100"
      //         src="https://loremflickr.com/800/400/dog"
      //         alt="Second slide"
      //       />
      //       <Carousel.Caption>
      //         <h3>För hela familjen</h3>
      //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //     <Carousel.Item>
      //       <img
      //         className="d-block w-100"
      //         src="https://loremflickr.com/800/400/paris"
      //         alt="Third slide"
      //       />
      //       <Carousel.Caption>
      //         <h3>Stäng ute resten av världen</h3>
      //         <p>
      //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      //         </p>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //   </Carousel>
      //   <Button className="custom-btn" as={Link} to={"/book"}>
      //     Boka din vistelse här
      //   </Button>
      // </Container>

      <Container align="center" style={{ maxWidth: "550px" }} className="home">
        <img
          src={require("../images/ellaslogoprimo.png")}
          alt="ella logo"
          width="200px"
          height="120px"
        />

        <h1>
          {textThatChanges}
          <br /> Ella's Hotel
        </h1>
        <Button className="custom-btn" as={Link} to={"/book"}>
          Boka
        </Button>
      </Container>
    );
  }
}
