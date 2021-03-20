import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

//Table grids in react bootstrap
export class Grids extends React.Component {
    render() {
      return (
        <Container
          style={{
            background: "red",
            fontSize: "50px",
            border: "2",
            borderColor: "white",
          }}
        >
          <Row>
            <Col xs={2}>First</Col>
            <Col xs lg="2">
              Second
            </Col>
            <Col>Third</Col>
          </Row>
          <Row className="mb-0">
            <Col sm md={2} lg={2}>
              First
            </Col>
            <Col md="auto">Second</Col>
            <Col>Third</Col>
          </Row>
        </Container>
      );
    }
  }