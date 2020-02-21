import React, {useState} from "react";
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import StarWarsPerson from "./StarWarsPerson";

const StarWars = ({ people, nextPage, prevPage }) => {
    const [page, setPage] = useState(1);

    
  return (
    <Container>
        <Pagination>
      {people && people.previous ? (
        <PaginationItem><PaginationLink previous onClick={() => prevPage()} /></PaginationItem>
      ) : null}
      {people && people.next ? (
        <PaginationItem><PaginationLink next onClick={() => nextPage()} /></PaginationItem>
      ) : null}
      </Pagination>
      <Row xs={1} sm={1} md={2} lg={3}>
        {people && people.results
          ? people.results.map((person, i) => {
              return (
                <Col>
                  <Container>
                    <StarWarsPerson key={i} person={person} />
                  </Container>
                </Col>
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default StarWars;
