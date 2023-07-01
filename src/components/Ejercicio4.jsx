import React from 'react'
import ButtonsNumber from './ButtonsNumber'

function Ejercicio4() {
    const number = 30
    const arrayNumbers = []
    for (let i = 0; i <= number; i++) {
        arrayNumbers.push(i)
    }

    return (
        <div className='numbers'>
            {arrayNumbers.map((number) => {
                return <ButtonsNumber
                    number={number}
                />
            })}
        </div>
    )
}

export default Ejercicio4