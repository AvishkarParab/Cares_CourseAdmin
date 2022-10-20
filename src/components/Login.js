import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Login = () => {
  return (
    <>
      <Container>
      <h2 className="text-center mt-3 fw-bold">LOGIN PAGE </h2>
      <br /><br />
        <Form className="mt-3 loginForm" >
          <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
          >
          <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel><br />
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
