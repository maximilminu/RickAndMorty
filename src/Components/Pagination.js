import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginationn = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }


    return (
        <Pagination className='pagination-container'>
                {/* <Pagination.First /> */}
                <Pagination.Prev onClick={prevPage} />
                {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item> */}
                <Pagination.Item active>{currentPage}</Pagination.Item>
                {/* <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
                <Pagination.Next onClick={nextPage} />
                {/* <Pagination.Last /> */}
        </Pagination>
    )
}

export default Paginationn