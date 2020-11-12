import React, {useState, useEffect} from "react";
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import StarWarsPerson from "./StarWarsPerson";
import StarWarsPagination from './StarWarsPagination';

const StarWars = ({ people, nextPage, prevPage, goToPage }) => {
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(()=> {
        if(people){
            setTotalPages(Math.round(people.count / 10.0));
            setPages(Array(Math.round(people.count / 10.0)));
            if(people.next){
                setActivePage(Number(people.next.split('page=')[1]) - 1)
            } else {
                setActivePage(Number(people.previous.split('page=')[1]) + 1)
            }
        }
        if(pages.length > 0){
            const fillPagesArr = pages.concat();
            for(let i = 0; i < fillPagesArr.length; i++){
                fillPagesArr[i] = i + 1;
            }
           setPages(fillPagesArr);
        }
    }, [people, totalPages])
    
  return (
    <Container>
        <Pagination>
      {people && people.previous ? (
        <PaginationItem><PaginationLink previous onClick={() => prevPage()} /></PaginationItem>
      ) : null}
      {pages.map(page => {
          return <StarWarsPagination selectedPage={activePage} goToPage={goToPage} pageFromParent={page} />
      })}
      {people && people.next ? (
        <PaginationItem><PaginationLink next onClick={() => nextPage()} /></PaginationItem>
      ) : null}
      </Pagination>
      <Row xs={1} sm={1} md={2} lg={3}>
        {people && people.results
          ? people.results.map((person, i) => {
              return (
                <Col style={{marginBottom: '35px'}}>
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
