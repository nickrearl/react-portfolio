import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, Outlet } from "react-router-dom"

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Nick Earl</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" as={Link} to='/'>About Me</Nav.Link>
              <Nav.Link href="#portfolio" as={Link} to='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href="#contact" as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link href="#resume" as={Link} to='/resume'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            <section>
            <Outlet/>
          </section>
    </>
  )
}

export default Header

