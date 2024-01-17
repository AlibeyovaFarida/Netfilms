import React from 'react'
import Skeleton from '@/components/skeleton'
import styles from "./styles.module.css"
const CategoriesLoading = () => {
  return (
    <div className={styles.categories}>
        {Array(5).fill("*").map((_,index) => {
            return <Skeleton key={index} height={72}/>
        })}
    </div>
  )
}

export default CategoriesLoading