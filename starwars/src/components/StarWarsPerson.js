import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";
const assets = require.context("../assets", true);

const StarWarsPerson = ({ person }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log(person.url.split("/"));
  return (
    <Card>
      <CardImg
        src={assets("./characters/" + person.url.split("/")[5] + ".jpg")}
      />
      
        <CardTitle>
            <h3>{person.name}</h3>
            <span onClick={() => setIsCollapsed(!isCollapsed)}>&#9661;</span>
        </CardTitle>
        
        {isCollapsed ? (
            <CardBody>
          <Container>
            <Row xs={1}>
              <Col>Height: {person.height}</Col>
              <Col>Mass: {person.mass}</Col>
              <Col>Hair Color: {person.hair_color}</Col>
              <Col>Skin Color: {person.skin_color}</Col>
              <Col>Eye Color: {person.eye_color}</Col>
              <Col>Birth Year: {person.birth_year}</Col>
              <Col>Gender: {person.gender}</Col>
            </Row>
          </Container>
          </CardBody>
        ) : null}
      
    </Card>
  );
};

export default StarWarsPerson;
