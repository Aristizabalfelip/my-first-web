import React from 'react'
import { arrayPokemons } from "./object"
import PaintPokemons from "./Pokemons";



const Ejercicio3 = () => {
    return (
        <div className="divPokemons">
            {arrayPokemons.map((pokemon, i) => {
                return <PaintPokemons
                    key={i}
                    id={pokemon.id}
                    nam={pokemon.name}
                    img={pokemon.img}
                />
            })}
        </div>
    )
}
export default Ejercicio3