import Loginform from "./Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import image from "./undraw_secure_login_pdn4.svg";

const Maincontent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="login-form">
            <Loginform />
          </div>
        </Col>
        <Col md={6} className="image-col">
            <img className="image" src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Maincontent;
