import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";

export function FormHandler() {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group controlId="formBasicEmail" className="mr-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
            ></Form.Control>
            <Form.Text>Your Email is intact with us</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="fornBasicCheckbox">
          <Form.Check type="checkbox" label="Click to remember me"></Form.Check>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput">
          <Col sm="8">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Col sm="8">
            <Form.Label>
              Select from the option your area of specialisation
            </Form.Label>
            <Form.Control as="select">
              <option>Doctor</option>
              <option>Programmer</option>
              <option>Engineer</option>
              <option>Footballer</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group controlId="exampleFrom.ControlTextarea">
          <Col sm="8">
            <Form.Label>Tell us how you feel about this programme</Form.Label>
            <Form.Control as="textarea" Row={3}></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Col sm="3">
            <Form.File label="Click here to upload your file"></Form.File>
          </Col>
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Form.Group>
          <Col sm="8">
            <Form.Control type="range"></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

const Boxes = ["checkbox", "radio"];

export function CRBoxes() {
  return Boxes.map((boxes, idx) => {
    return (
      <div>
        <Form.Check type={boxes} label="Check me here" key={idx} isInvalid />
      </div>
    );
  });
}
