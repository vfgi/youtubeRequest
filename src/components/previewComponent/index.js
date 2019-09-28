import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

export default function Preview(props) {
  return (
    <Container>
      <img src={props.img} alt="" />
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
      <span>{props.description}</span>
      <Link to={props.link}>
        <button>Detalhes do video</button>
      </Link>
    </Container>
  )
}
