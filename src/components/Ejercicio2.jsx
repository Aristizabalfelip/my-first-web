import React from 'react'
import { infoRanking } from './object'
import PaintStars from './PaintStars'
import Linkdin from './Linkdin'

const Ejercicio2 = () => {
  return (
    <div className='linkdin'>
        {infoRanking.map((persons, i) => {
            return <Linkdin 
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