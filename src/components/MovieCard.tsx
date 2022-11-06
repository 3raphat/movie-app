import React from 'react'

interface movieCard {
  poster_path: string
  title: string
  overview: string
}

const MovieCard: React.FC<movieCard> = ({ poster_path, title, overview }) => {
  
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='p-4 m-6 rounded-xl w-[360px] bg-slate-900 text-slate-100 flex flex-col'>
      <img src={IMG_PATH + poster_path} alt='poster' className='rounded-md' />
      <h2 className='text-2xl font-bold mt-4 mb-2'>{title}</h2>
      <p className='text-slate-400'>{overview}</p>
    </div>
  )
}

export default MovieCard
