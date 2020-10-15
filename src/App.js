import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

import './App.css';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charaData, setCharaData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then (res => {
        setCharaData(res.data.results)
        //console.log(res.data.results)
      })
      .catch (err => {
        debugger
      })
  }, [])

  const kf = keyframes`
  33% {
    transform: scale(.6);
  }
  66% {
    transform: scale(1.4);
  }
  `

  const StyledHeader = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    padding: 5%;
    animation: ${kf} 2s;
  `

  const StyledCharacters = styled.section`
    display:flex;
    flex-direction:column;
  `

  return (
    <div App className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
      <StyledCharacters className='Characters'>

        {charaData.map(ch => {
          return <Character key={ch.id} info={ch} />
          })
        }

      </StyledCharacters>

    </div>
  );
}

export default App;
