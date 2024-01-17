import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
import {getMovie} from '@/services/movie'

const MoviePage = async({params, searchParams}) => {
    const movieDetails = await getMovie(params.id)
    if(!movieDetails){
        notFound();
    }
  return <MovieContainer movie={movieDetails}/>
}

export default MoviePage