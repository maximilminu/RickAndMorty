import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from '../Commons/Card';
import { getAllCharacters } from '../State/characters'
import "../Styles/index.css"
import Pagination from './Pagination';

const Grid = () => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    const charactersData = data.characters

    useEffect(() => {
        dispatch(getAllCharacters(page))
    }, [page])

    return (
        <div>
            <section className='grid-container'>
                <div className='grid'>
                    {charactersData.results && charactersData.results.map((character, index) => {
                        return (
                            <Card singleResult={character} key={index} page={page} />
                        )
                    })}
                </div>
            </section>
            <div className='pagination-container'>
                {charactersData.results?
                    <Pagination nPages={charactersData.info.pages} currentPage={page} setCurrentPage={setPage} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Grid