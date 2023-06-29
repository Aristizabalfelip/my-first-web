import React from 'react'
import PaintCard from './card'
import {infoCards} from './object'


const Ejercicio1 = () => {
  return (
<div className="App">
   {infoCards.map((cards, i) =>  {
    return <PaintCard 
    key = {i}
    type = {cards.type}
    number = {cards.number}
    expirationMonth = {cards.expirationMonth}
    expirationYear = {cards.expirationYear}
    bank = {cards.bank}
    owner = {cards.owner}
    cssClass = {cards.cssClass}
    />
   })}

    </div>
  )
}

export default Ejercicio1