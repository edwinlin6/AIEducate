import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Input extends Component {
  render() {
    return (
      <Form action="/" method='post'>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" controlId="validationCustom01" name="age" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Grade Level</Form.Label>
          <Form.Control type="text" placeholder="Enter Grade Level" controlId="validationCustom01" name="grade"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Input;
