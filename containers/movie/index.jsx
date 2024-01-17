import {FeaturedMovie} from '@/components/featured-movies'
import React from 'react'

const MovieContainer = ({movie}) => {
  return <FeaturedMovie movie={movie} isCompact={false}/>
}

export default MovieContainer