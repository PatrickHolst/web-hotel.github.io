import React from "react";
import {
  Nav,
  Container,
  Navbar,
  Offcanvas,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Form, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          bg="dark"
          className="nav"
        >
          <Container>
            <Navbar.Brand href="home">
              <img
                src={require("../images/ellaslogoprimo.png")}
                alt="ella logo"
                width="125px"
                height="50px"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/extra">Boka extrautbud</Nav.Link>
                  <Nav.Link href="/konferens">Konferens</Nav.Link>
                  <Nav.Link href="#">Kontakt</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
  // return (
  //   <>
  //     {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
  //       <Navbar
  //         key={expand}
  //         expand={expand}
  //         variant="dark"
  //         bg="dark"
  //         className="nav"
  //       >
  //         <Container>
  //           <Navbar.Brand href="home">
  //             <img
  //               src={require("../images/ellaslogoprimo.png")}
  //               alt="ella logo"
  //               width="150px"
  //               height="65px"
  //             />
  //           </Navbar.Brand>
  //           <hr />
  //           <Nav>
  //             <Navbar.Brand
  //               as={Link}
  //               // to={"/"}
  //               className="link"
  //               activeClassName="active"
  //             >
  //               <h6>Konferens</h6>
  //             </Navbar.Brand>
  //             <Navbar.Brand
  //               as={Link}
  //               to={"/extra"}
  //               className="link"
  //               activeClassName="active"
  //             >
  //               <h6>Extra utbud</h6>
  //             </Navbar.Brand>
  //             <Navbar.Brand
  //               as={Link}
  //               // to={"/"}
  //               className="link"
  //               activeClassName="active"
  //             >
  //               <h6>Kontakt</h6>
  //             </Navbar.Brand>
  //           </Nav>
  //         </Container>
  //       </Navbar>
  //     ))}
  //   </>
  // );
};

export default Header;
