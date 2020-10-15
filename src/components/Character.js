// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
33% {
  transform: scale(.6);
}
66% {
  transform: scale(1.4);
}
`

const StyledCharacter = styled.article`
    width: 100%;
    animation: ${kf} 2s;
    .charaPic{
        background-color: rgba(0,255,0,.5);
    }
    .charaText{
        font-size: 1.2rem;
        font-weight: bold;
        font-style: oblique;
        opacity:80%;
    }
`

export default function Character(pr) {
    //console.log(pr)
    return (
      <StyledCharacter>
          <div className="charaPic">
            <img src={pr.info.image}/>
          </div>
          <div className="charaText">
            Name: {pr.info.name}<br></br>
            Status: {pr.info.status} <br></br>
            Species: {pr.info.species} <br></br>
            <br></br>
            <br></br>
          </div>
      </StyledCharacter>
    )
  }