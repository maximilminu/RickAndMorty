import React, { useEffect, useState } from 'react'
import Figure from 'react-bootstrap/Figure';
import "../Styles/index.css"
import { useSelector, useDispatch } from "react-redux";
// import { getSingleEpisode } from '../State/episodes';
import axios from 'axios';

const Card = ({ singleResult }) => {

    //HACE FALTA ARREGLAR EL FIRSTSEEN, NO SE COMO MANEJAR EL USEEFFECT CON EL REDUX

    const dispatch = useDispatch()
    const data = useSelector((state) => state)

    const [episodeName, setepisodeName] = useState("")

    // const [firstSeen, setFirstSeen] = useState("")

    const name = singleResult.name
    const location = singleResult.location.name
    const status = singleResult.status
    const species = singleResult.species
    const url = singleResult.episode[0]

    // console.log(firstSeen);


    useEffect(() => {
        // dispatch(getSingleEpisode(url))
        // axios.get(`${url}`)
        //     .then((singleEpisode) => {
        //         setepisodeName(singleEpisode)
        //     })
    }, [])


    // console.log("DATAAAA", episodeName? episodeName: null);

 
    // const letterNameCounter = (name.toLowerCase()).replace(/[^c]/g, "").length
    // const letterLocationCounter = (location.toLowerCase()).replace(/[^l]/g, "").length


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
                    {location}
                </div>
                {/* <div className='character-section'>
                    <h5>First seen in:</h5>
                    {episodeName? episodeName : null}
                </div> */}

            </div>
        </Figure>
    )
}

export default Card
