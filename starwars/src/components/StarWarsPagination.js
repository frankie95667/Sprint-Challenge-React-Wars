import React, {useState, useEffect} from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';

const StarWarsPagination = ({selectedPage, pageFromParent, goToPage}) => {
    const [page, setPage] = useState(pageFromParent);

    return (
        <PaginationItem active={selectedPage === page}>
            <PaginationLink onClick={()=> goToPage(pageFromParent)}>{pageFromParent}</PaginationLink>
        </PaginationItem>
    );
}

export default StarWarsPagination;