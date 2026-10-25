import React from 'react'
import './App.css'
import { Container} from '@mui/material'
import './CardDog.css'

function CardDog({link_dog, name, bread, age}) {
  return (
    <>
    <Container className="card">
      <img src={link_dog} alt="Dog" />
      <h2>{name}</h2>
      <p>Breed: {bread}</p>
      <p>Age: {age} years</p>
    </Container>
    </>
  )
}

export default CardDog