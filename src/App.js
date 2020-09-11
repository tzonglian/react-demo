import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

import './App.css';
import Character from './components/Character.js';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charaData, setCharaData] = useState([])
  const [currentChara, setCurrentChara] = useState('1')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then (res => {
        setCharaData(res.data.results)
        console.log(res.data.results)
      })
      .catch (err => {
        debugger
      })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <section className='characters'>

        {charaData.map(ch =>
          <div className='character' key={ch.id}>
            {ch.name}
            {/* <article className='characterInfo'>
              Name: `${currentChara.name}`
            </article> */}
          </div>
        )}

      </section>

      {/* {
        charaData.map(ch => {
          return <Character key={ch.id} info={ch} />
        })
      } */}
    </div>
  );
}

export default App;
