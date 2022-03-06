import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;
    return (
      <Container>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto ">
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="username"
                  type="email"
                  placeholder="Enter email"
                  value={username}
                  autoFocus
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
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
