import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from '../State/characters'
// import { getAllEpisodes } from '../State/episodes';
// import { getAllLocations } from '../State/locations';

const Info = () => {
  const [currentpage, setCurrentPage] = useState(1)
  // const [character, setCharacters] = useState([])
  const allCharacters = []
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  const characterPages = data.characters.info ? data.characters.info.pages : 2

  useEffect(() => {
    dispatch(getAllCharacters(currentpage))
    data.characters.results && data.characters.results.map((character) => {
      allCharacters.push(character)
    })
  }, [currentpage])
  
  setCurrentPage(data.characters.info && data.characters.info.next.slice(48))

  // const letterNameCounter = (name.toLowerCase()).replace(/[^c]/g, "").length
  // const letterLocationCounter = (location.toLowerCase()).replace(/[^l]/g, "").length

  // return (
  //   <div className='info-container'>
  //     <p></p>

  //   </div>
  // )
}

export default Info