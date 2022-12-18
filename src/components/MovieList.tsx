import React, { useEffect } from 'react'
import { IMovies } from './helpers/types'
import MovieItem from './MovieItem'

const MovieList = ({ movies }: { movies: IMovies[] }) => {

  return (
    <div className='flex flex-col gap-20 flex-wrap items-center justify-center mx-auto py-4 w-[80%] sm:flex-row xs:flex-row'>
      {
        movies && movies.length > 0 ?
          movies.map((movie: IMovies) => (
            <MovieItem key={movie.imdbID} movie={movie} />

          )) : <h1 className='text-3xl justify-self-center mx-auto'>Movie Not Found!</h1>
      }
    </div>

  )
}

export default MovieList