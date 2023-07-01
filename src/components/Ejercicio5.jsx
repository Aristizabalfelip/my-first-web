import React from 'react'
import ComparisonBar from './ComparisonBar'
import {objPopulatedCountries} from './object'

function Ejercicio5() {
  return (
    <div className='comparisonBar'>
        <h1>30 Days of Rect</h1>
        <p>World population</p>
        <p>Ten most populated countries</p>
        <section>
            {objPopulatedCountries.map((countries, i)=> {
                return <ComparisonBar 
                key = {i}
                country = {countries.country}
                population = {countries.population}
                />
            })}
            
       
        </section>
    </div>
  )
}

export default Ejercicio5