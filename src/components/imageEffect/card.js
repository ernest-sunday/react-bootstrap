import React from "react";
import { Card, CardGroup, Button, Container,ListGroup } from "react-bootstrap";
import Img2 from "../imageEffect/images/Card2.jpg";
import Img3 from "../imageEffect/images/Card3.jpg";
import Img4 from "../imageEffect/images/Card4.jpg";

export function CardDisplay() {
  return (
    <CardGroup
      id="first"
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "700px",
      }}
    >
      <Card>
        <Card.Img src={Img2} alt="Card2"></Card.Img>
        <Card.Body>
          <Card.Title>Testing card 1</Card.Title>
          <Card.Text>
            <p>
              Hi I need to test all the card in here and know if it feats in
              well in what I want to do. The question is will it actually look
              good if I am to place it this way. If it is not you need an
              alternative.
            </p>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={Img3} alt="Card2"></Card.Img>
        <Card.Body>
          <Card.Title>Testing card 2</Card.Title>
          <Card.Text>
            <p>
              Hi I need to test all the card in here and know if it feats in
              well in what I want to do. The question is will it actually look
              good if I am to place it this way. If it is not you need an
              alternative.
            </p>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={Img2} alt="Card2"></Card.Img>
        <Card.Body>
          <Card.Title>Testing card 3</Card.Title>
          <Card.Text>
            <p>
              Hi I need to test all the card in here and know if it feats in
              well in what I want to do. The question is will it actually look
              good if I am to place it this way. If it is not you need an
              alternative.
            </p>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={Img4} alt="Card2"></Card.Img>
        <Container></Container>
        <Card.Body>
          <Card.Title>Testing card 4</Card.Title>
          <Card.Text>
            <p>
              Hi I need to test all the card in here and know if it feats in
              well in what I want to do. The question is will it actually look
              good if I am to place it this way. If it is not you need an
              alternative.
            </p>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Button variant="primary" value="Submit">
            Submit
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
