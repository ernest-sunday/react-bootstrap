import React from "react";
import { Card, Nav, Button, Container } from "react-bootstrap";

export function NavCard() {
  return (
    <Container>
      <Card className="mt-3">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="htttp://www.clacified.com">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://clacified.com/sports">Sports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://clacified.com/entertainment">
                Entertainment
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>A New Format for Cards with Navigtion</Card.Title>
          <Card.Text>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
          </Card.Text>
          <Button type="submit">Click to Agree</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


