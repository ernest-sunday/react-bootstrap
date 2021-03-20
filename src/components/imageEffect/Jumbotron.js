import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export function Jumbo() {
  return (
    <Jumbotron>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}
