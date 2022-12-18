import React from 'react'
import { IMovies } from './helpers/types'
const MovieItem = ({ movie }: { movie: IMovies }) => {
  const { Poster, Title, Year, Type } = movie

  return (
    <div className='h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] relative ' >
      {/* <span className=' text-white text-2xl font-bold'>{movie.Title}</span> */}
      {
        Poster == 'N/A' ?
          <div className='absolute top-0 left-0 w-full h-full bg-black  mix-blend-multiply z-50 flex flex-col justify-center items-center rounded-md'>
            <h1 className='text-white text-2xl font-bold z-50'>{Title}</h1>
            <h1 className='text-white text-xl font-bold'>{Year}</h1>
            <h1 className='text-white text-xl font-bold'>{Type}</h1>
          </div>
          :

          <img src={Poster} alt="poster" className=' w-full h-full rounded-md  mix-blend-darken' />
      }
    </div>

  )
}

export default MovieItem