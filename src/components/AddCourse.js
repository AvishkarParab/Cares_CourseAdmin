import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
const AddCourse = () => {
  return (
    <>
      <Container>
        <h2 className='text-center mt-3'>ADD COURSE PAGE</h2>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Course Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the course"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Total Modules</Form.Label>
            <Form.Control type="number" placeholder="No. of modules/topics" defaultValue={0}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            ADD
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddCourse;
