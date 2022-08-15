// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { getAllEpisodes } from '../State/episodes';
// import { getAllLocations } from '../State/locations';
// import axios from 'axios';

const EpisodeCounter = () => {

    // const url = "https://rickandmortyapi.com/api/"

    // const dispatch = useDispatch()
    // const episodesData = useSelector((state) => state.episode)
    // const locationsData = useSelector((state) => state.locations)

    // //Cantidad total de paginas
    // // const LocationPages = locationsData.info && locationsData.info.pages
    // const episodePages = episodesData.info && episodesData.info.pages

    // const [isRunning, setIsRunning] = useState(false)
    // const [timecount, setTimeCount] = useState(0)
    // const [allEpisodes, setAllEpisodes] = useState("")

    // useEffect(() => {
    //     dispatch(getAllEpisodes())
    //     dispatch(getAllLocations())
    // }, [])


    // const handleClick = () => {

    //     setIsRunning(true)
    //     const start = performance.now()
    //     async function getData() {
    //         const episodes = []

    //         try {
    //             for (let i = 1; i <= episodePages; i++) {
    //                 await axios.get(`${url}episode/?page=${i} `)
    //                     .then((res) => {
    //                         res.data.results.map((episode) => {
    //                             episodes.push({
    //                                 "name": episode.name,
    //                                 "id": episode.id
    //                             })
    //                         })
    //                     })
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }

    //         setAllEpisodes(episodes)
    //         setIsRunning(false)
    //     }


    //     getData()
    //     const end = performance.now()

    //     setTimeCount((end - start).toFixed(2) * 100)
    // }

    return (
        <div>
            
        </div>
    )
}

export default EpisodeCounter