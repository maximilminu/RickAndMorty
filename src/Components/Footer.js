import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from '../State/characters'
import { getAllEpisodes } from '../State/episodes';
import { getAllLocations } from '../State/locations';

const Footer = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllCharacters())
    dispatch(getAllEpisodes())
    dispatch(getAllLocations())
}, [])

  const charactersData = data.characters
  const episodesData = data.episode
  const locationData = data.locations

  return (
    <div className='footer-container'>
      <ul className='footer-info-container'>
        <li className='footer-info'>CHARACTERS: {charactersData.info? charactersData.info.count : null} </li>
        <li className='footer-info'>LOCATIONS:{locationData.info? locationData.info.count : null} </li>
        <li className='footer-info'>EPISODES: {episodesData.info? episodesData.info.count : null} </li>
      </ul>
    </div>
  )
}

export default Footer