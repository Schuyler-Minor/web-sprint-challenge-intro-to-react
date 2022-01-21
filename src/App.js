import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';

const StyledCard = styled.div`
  display : flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [currentCharacterId, setCurrentCharacterId] = useState('1')

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
      <h1 className="Header">Star Wars Characters</h1>
      <StyledCard>
      <Character data = {characters} />
      </StyledCard>
      
      
    </div>
  );
}

export default App;
