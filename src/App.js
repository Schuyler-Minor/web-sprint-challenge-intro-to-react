import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('1')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
      
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(cr => {
          return
          <Character key={cr.id} info={cr} action={openDetails} />
          
        })
      }
      <Details/>
    </div>
  );
}

export default App;
