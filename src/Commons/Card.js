import React, { useEffect, useState } from 'react'
import Figure from 'react-bootstrap/Figure';
import "../Styles/index.css"
import axios from 'axios';

const Card = ({ singleResult,page }) => {

    const [firstSeen, setFirstSeen] = useState("")

    const name = singleResult.name
    const location = singleResult.location.name
    const status = singleResult.status
    const species = singleResult.species
    const url = singleResult.episode[0]

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setFirstSeen(res.data.name)
            })
    }, [page])


    return (
        <Figure className='character-card'>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={singleResult.image}
                className='character-image'
            />
            <div className='character-content' >
                <div className='character-section'>
                    <h4> {name}</h4>
                    <div className='status-section'>
                        {status == "Alive" ? <p className="status-icon-green">{'\u2B24'}</p>
                            : status === "unknown" ? <p className="status-icon-grey">{'\u2B24'}</p>
                                : <p className="status-icon-red">{'\u2B24'}</p>}
                        <p className='status-content'>  {status} - {species}</p>
                    </div>
                </div>
                <div className='character-section'>
                    <h5>Last known location:</h5>
                    <p>{location}</p>
                </div>
                <div className='character-section'>
                    <h5>First seen in:</h5>
                    <p>{firstSeen}</p>
                </div>

            </div>
        </Figure>
    )
}

export default Card
