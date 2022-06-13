import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../auth/authSlice";
const Loginform = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log("Missing Password");
    }

    if (isSuccess || user) {
      navigate("/Dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <Form onSubmit={onSubmit}>
      <div className="form-header">
        <h1>Welcome Back</h1>
        <h2>Sub-title text goes here</h2>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email Address *"
          onChange={onChange}
          value={email}
          id="email"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password *"
          value={password}
          onChange={onChange}
          id="password"
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-btn">
        Login
      </Button>
      <Form.Group className="mb-3 form-text" controlId="formBasicCheckbox">
        <Row className="password-text">
          <Col>
            <Form.Check type="checkbox" label="Remember Password" />
          </Col>
          <Col>
            <Form.Text>Forgot Password?</Form.Text>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default Loginform;
