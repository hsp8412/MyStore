import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto ">
            <h1>Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
