import React from 'react'
// import Loading from '@/app/[[...categories]]/loading'
import Loading from '../loading'
import styles from './styles.module.css'
const FeaturedMovieLoading = () => {
  return (
    <div style={{height: 278}} className={styles.movieWrapper}>
        <Loading/>
    </div>
  )
}

export default FeaturedMovieLoading