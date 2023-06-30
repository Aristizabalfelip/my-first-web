import React from 'react'
import PaintStars from './PaintStars'

const Linkdin = ({ nam, rating, gender, job, city, state }) => {
  return (
    <div>
        <h1>{nam}</h1>
        <article className='wrapper'>
            <PaintStars rating={rating}/>
        </article>
        <p>{gender}</p>
        <h3>{job}</h3>
        <article className='articleCity'><h3>{city}</h3><h4>{state}</h4> </article>
    </div>
  )
}

export default Linkdin