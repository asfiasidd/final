import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import '../style/Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });
  const slideLeft = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' }, config: { duration: 2000 } });
  const slideRight = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(100%)' }, config: { duration: 2000 } });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setErrorMessage("Please enter your email.");
      return;
    }

    if (password.trim() === "") {
      setErrorMessage("Please enter your password.");
      return;
    }

    console.log("Login successful!");
  };

  return (
    <animated.div className="login-page" style={slideRight}>
      <animated.div className="login-container" style={slideLeft}>
        <Card className="shadow">
          <Card.Body>
            <div className="login-title">
              <h2 className="fw-bold mb-2 text-uppercase">Clicky</h2>
              <p className="mb-5">
                <b className="ty">Please enter your login and password!</b>{" "}
              </p>
            </div>
            <div className="mb-3">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="mb-3">
                  <p className="small">
                    <a className="forget" href="#!">
                      Forgot password?
                    </a>
                  </p>
                </div>

                <div className="d-grid text-decoration-none">
                  <Button
                    className="btn btn-warning"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </Form>

              {errorMessage && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="mt-3">
                <p className="mb-0 text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" className="si fw-bold text-decoration-none">Sign Up</Link>
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </animated.div>
    </animated.div>
  );
}

 

