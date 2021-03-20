import React, { useState } from "react";
import { Alert, Container, Button, Badge } from "react-bootstrap";

//Alert in react bootstrap
export function Sample() {
  return (
    <Container>
      <Alert variant="danger">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>Hey welcome how are you !!!</p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </Container>
  );
}

export function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{marginTop:"10px"}}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </div>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export function Example() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hey, this is john!!!</Alert.Heading>
        <p>If you need any assistant give me a call</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show alert</Button>;
}

export function AlertDismissibleButton() {
  const [state, setState] = useState(true);

  if (state) {
    return (
      <Alert variant="info" onClose={() => setState(false)}>
        <Alert.Heading>
          Hello!! Do you need any help from Clacified?
        </Alert.Heading>
        <p>
          If yes do not hesitate to call us. We will be please to solve your
          daily problems
        </p>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setState(false)} variant="outline-success">
            Close Alert
          </Button>
        </div>
      </Alert>
    );
  }
  return (
    <Button onClick={() => setState(true)}>
      Open Alert
      <Badge variant="light">
        9
      </Badge>
    </Button>
  );
}
