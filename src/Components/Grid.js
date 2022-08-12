import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from '../Commons/Card';
// import Pagination from '../Commons/Pagination';
import { getAllCharacters } from '../State/characters'
import { getSingleEpisode } from '../State/episodes';


import "../Styles/index.css"
import Footer from './Footer';
import Paginationn from './Paginationn';

const Grid = () => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    const charactersData = data.characters

    useEffect(() => {
        dispatch(getAllCharacters(page))
        // dispatch(getSingleEpisode(data.characters.results))
    }, [page])

    // console.log("DATAAA",data.characters);

    return (
        <div>
            <section className='grid-container'>
                <div className='grid'>
                    {charactersData.results && charactersData.results.map((character, index) => {
                        return (
                            <Card singleResult={character} key={index} />
                        )
                    })}
                </div>
            </section>
            <div className='pagination-container'>
                {charactersData.results?
                    <Paginationn nPages={charactersData.info.pages} currentPage={page} setCurrentPage={setPage} />
                    :
                    null
                }
            </div>
                <Footer />
        </div>
    )
}

export default Grid