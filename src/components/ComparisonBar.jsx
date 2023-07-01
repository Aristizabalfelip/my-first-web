import React from 'react'
import { objPopulatedCountries } from './object';

const values = objPopulatedCountries.map(element => element.population);
const maximo = Math.max(...values)

function ComparisonBar({ country, population}) {
    const percentage = Math.round((population/maximo)*100);
    return (
        <div className='countries'>
            <article><p>{country}</p></article>
            <div>
            <div style={{width: `${percentage}%`, height:`10px`, backgroundColor:`red`}}></div>
            </div>
            <p>{population}</p>
        </div>
    )
}
export default ComparisonBar