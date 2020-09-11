// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Character(pr) {
    console.log(pr)
    return (
      <article>
          Name: {pr.info.name}
          Status: {pr.info.status}
          Species: {pr.info.species}
      </article>
    )
  }