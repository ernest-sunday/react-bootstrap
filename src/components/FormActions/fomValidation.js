import React, { useState } from "react";
import { Form, InputGroup, Button, Container, Col } from "react-bootstrap";

export function FormValidation() {
  const [state, setState] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidation() === false) {
      return event.preventDefault;
    }
    setState(true);
  };
  return (
    <Container>
      <h2>Form Validation</h2>
      <Form state={state} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="8" controlId="formName1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter your name"
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="formName2">
          <Form.Label>Surname Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="formUserName">
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
            <Form.Control
              required
              type="text"
              placeholder="Enter your username"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} md="8" controlId="formState">
          <Form.Label>Enter your state of origin</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your state of origin"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            custom
            id="custom-checkbox"
            required
            label="I agree to the terms provided"
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="switch"
            label="Switch on"
            id="custom-switch"
          />
        </Form.Group>
        <Form.Group controlId="formSelect">
          <Form.Label>Select the one you like</Form.Label>
          <Form.Control as="select" custom>
            <option>Football</option>
            <option>Basketball</option>
            <option>Programming</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
