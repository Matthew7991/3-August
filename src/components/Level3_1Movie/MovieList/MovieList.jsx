import React, { useState } from 'react'
import movies from "./data.js"
import MovieItem from '../MovieItem/MovieItem.jsx'
import { v4 as uuidv4 } from 'uuid';
import "./MovieList.scss"

function MovieList() {
  const [sortedData, setSortedData] = useState([...movies])

  const sortDateAscending = () => {
    setSortedData(prevData => {
      return [...prevData].sort((a,b) => {
        if (a.year === b.year) {
          return 0
        } 
        if (a.year > b.year) {
          return 1
        }
        if (a.year < b.year) {
          return -1
        }
      })
    })
  }

  const sortDateDescending = () => {
    setSortedData(prevData => {
      return [...prevData].sort((a,b) => {
        if (a.year === b.year) {
          return 0
        } 
        if (a.year < b.year) {
          return 1
        }
        if (a.year > b.year) {
          return -1
        }
      })
      })
    }


  const sortRating = () => {
    setSortedData(prevData => {
        return [...prevData].sort((a,b) => {
          if (a.rate === b.rate) {
            return 0
          } 
          if (a.rate < b.rate) {
            return 1
          }
          if (a.rate > b.rate) {
            return -1
          }
        })
      })
    }

  const sortAlphabetAscending = () => {
    setSortedData(prevData => {
        return [...prevData].sort((a,b) => {
          if (a.title === b.title) {
            return 0
          } 
          if (a.title > b.title) {
            return 1
          }
          if (a.title < b.title) {
            return -1
          }
        })
      })
    }

  const sortAlphabetDescending = () => {
    setSortedData(prevData => {
      return [...prevData].sort((a,b) => {
        if (a.title === b.title) {
          return 0
        } 
        if (a.title < b.title) {
          return 1
        }
        if (a.title > b.title) {
          return -1
        }
      })
    })
  }


  return (
    <section className='movies'>
      <div className="sorts">
        <button onClick={sortDateAscending}>Date Ascending</button>
        <button onClick={sortDateDescending}>Date Descending</button>
        <button onClick={sortRating}>Rating</button>
        <button onClick={sortAlphabetAscending}>A-Z</button>
        <button onClick={sortAlphabetDescending}>Z-A</button>
      </div>
      <div className='movies-list'>
        {sortedData.map(movie => <MovieItem
        title={movie.title}
        releaseYear={movie.year}
        director={movie.director}
        runtime={movie.runtime}
        rating={movie.rate}
        genres={movie.genre}
        key={uuidv4()}
        />)}
      </div>
    </section>
  )
}

export default MovieList
