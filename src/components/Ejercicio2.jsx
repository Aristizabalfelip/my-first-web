import React from 'react'
import { infoRanking } from './object'
import PaintStars from './PaintStars'

const Ejercicio2 = () => {
  return (
    <div>
        {infoRanking.map((persons, i) => {
            return <PaintStars 
            key = {i}
            nam= {persons.nam} 
            rating= {persons.rating} 
            gender= {persons.gender} 
            job= {persons.job} 
            city= {persons.city}
            state= {persons.state} 
            />
        })}
    </div>
  )
}

export default Ejercicio2