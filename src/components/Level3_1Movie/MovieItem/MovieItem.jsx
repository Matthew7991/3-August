import React from 'react'
import "./MovieItem.scss"
import { v4 as uuidv4 } from 'uuid';


function MovieItem(props) {
  return (
    <article className='movie'>
      <p>{props.title}</p>
      <p>{props.releaseYear}</p>
      <p>{props.director}</p>
      <p>{props.runtime}</p>
      <p>{props.rating}</p>
      {props.genres.map(genre => <p className='genre' key={uuidv4()}>{genre}</p>)}
    </article>
  )
}

export default MovieItem
