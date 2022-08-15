import React, { useEffect, useState } from 'react'
import chart from "../Assets/chart1.png"
import Button from 'react-bootstrap/Button';
import { getAllCharacters } from '../State/characters'
import { getAllEpisodes } from '../State/episodes';
import { getAllLocations } from '../State/locations';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import Footer from './Footer';



const CharCounter = () => {
  const url = "https://rickandmortyapi.com/api/"

  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  const charactersPages = data.characters.info && data.characters.info.pages
  const LocationPages = data.locations.info && data.locations.info.pages
  const episodePages = data.episode.info && data.episode.info.pages

  //ESTOS ESTADOS SON PARA CALCULAR LA PERFORMANCE DEL TOTAL DE LA EJECUCION
  const [isRunning, setIsRunning] = useState(false)
  const [timecount, setTimeCount] = useState(0)

  //ESTOS SON LOS ESTADOS QUE NECESITO ANALIZAR PARA CONTAR LAS LETRAS

  const [charInEpisodes, setCharInEpisodes] = useState(0)
  const [charInLocations, setCharInLocations] = useState(0)
  const [charInCharacters, setCharInCharacters] = useState(0)


  useEffect(() => {
    dispatch(getAllCharacters())
    dispatch(getAllEpisodes())
    dispatch(getAllLocations())
  }, [])


  const calculate = () => {

    setIsRunning(true)
    const start = performance.now()
    async function getData() {
      const characters = []
      const locations = []
      const episodes = []

      try {
        for (let i = 1; i <= charactersPages; i++) {
          await axios.get(`${url}character/?page=${i} `)
            .then((res) => {
              res.data.results.map((character) => {
                characters.push(character.name)
              })
            })
        }
      } catch (error) {
        console.log(error);
      }

      try {
        for (let i = 1; i <= LocationPages; i++) {
          await axios.get(`${url}location/?page=${i} `)
            .then((res) => {
              console.log(res.data.results);
              res.data.results.map((location) => {
                locations.push(location.name)
              })
            })
        }
      } catch (error) {
        console.log(error);
      }

      try {
        for (let i = 1; i <= episodePages; i++) {
          await axios.get(`${url}episode/?page=${i} `)
            .then((res) => {
              res.data.results.map((episode) => {
                episodes.push(episode.name)
              })
            })
        }
      } catch (error) {
        console.log(error);
      }

      setCharInEpisodes(episodes.toString().toLowerCase().replace(/[^e]/g, "").length)
      setCharInLocations(locations.toString().toLowerCase().replace(/[^l]/g, "").length)
      setCharInCharacters(characters.toString().toLowerCase().replace(/[^c]/g, "").length);

      setIsRunning(false)
    }

    getData()
    const end = performance.now()

    setTimeCount((end - start).toFixed(2) *100)
  }


  return (
    <div>
      <div className='button-container'>
        <Button variant="secondary" size="lg" onClick={calculate}>
          Calculate
        </Button>
      </div>
      <div className='char-counter-container'>
        <div className='info-container'>
          <div className='char-counter'>
            <p>Letter "C" appears {charInCharacters} times among all characters</p>
          </div>
          <div className='char-counter'>
            <p>Letter "L" appears {charInLocations} times among all locations</p>
          </div>
          <div className='char-counter'>
            <p>Letter "E" appears {charInEpisodes} times among all episodes</p>
          </div>
          <div className='char-counter'>
            <p>Execution time: {timecount} ms</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharCounter