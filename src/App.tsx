
import axios from 'axios'
import { useEffect, useState } from 'react'
import CustomInput from './components/CustomInput'
import { IMovies } from './components/helpers/types'
import MovieList from './components/MovieList'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<IMovies[]>([])
  useEffect(() => {
    handleSearch(search)
  }, [search])

  const handleSearch = (search: string) => {
    setSearch('')
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=58738731&s=${search}`)
      .then(res => {
        setMovies(res.data.Search)
      })
  }
  return (
    <div className='flex flex-col gap-8 mx-auto '>
      <div className='relative'>
        <h3 className=' font-bold text-4xl leading-[3rem] text-white sm:w-60 top-40 left-[77px] absolute z-50'>Watch something incredible</h3>
        <div className=' h-[550px] sm:w-full bg-[url("./assets/Rectangle-pc.png")] bg-no-repeat bg-cover bg-center lg:w-full' />
      </div>

        <CustomInput
          label='search'
          type='text'
          name='search'
          className=' border border-black outline-none h-[54px] text-2xl'
          handleChange={(e) => setSearch(e.target.value)}
        />
   
      <MovieList movies={movies} />

    </div >
  )

}

export default App
