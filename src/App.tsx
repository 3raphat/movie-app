import { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'

function App() {
  const API_KEY = '9cb6b6b1cfbefc0ee5fd9ab8ac301c11'
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])
console.log(movies);

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const url = searchTerm === '' ? API_URL : API_SEARCH + searchTerm
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  return (
    <div className='App bg-slate-800'>
      <div className='w-full p-6 pb-0 text-center'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            aria-label='search'
            placeholder='Search for movies...'
            className='px-6 py-2 rounded-full outline-none border-none bg-slate-700 text-slate-100 min-w-[50%]'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className='flex flex-wrap justify-center'>
        {movies.map((el: any) => (
          <MovieCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default App
