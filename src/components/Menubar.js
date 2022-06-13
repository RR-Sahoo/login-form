import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
const Menubar = () => {
  return (
    <Navbar expand="lg" className="menu-bar">
      <Container>
        <Navbar.Brand href="#" className="brand">
          ATools<span>.</span>
        </Navbar.Brand>
        <Nav className="justify-content-end menu-btn-section">
          <Nav.Item className="menu-btn">
            <Button variant="primary" className="free-btn">Start Free Trial</Button>
          </Nav.Item>
          <Nav.Item className="menu-btn">
          <Button variant="primary" className="menu-login-btn">Login</Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menubar;
