import React from 'react'

const ButtonsNumber = ({number}) => {
  const primo = (number) => {
console.log(number);
  }
  return (
    <div>
        <button className={primo(number)}>{number}</button>
    </div>
  )
}

export default ButtonsNumber

// number % 2 == 0 ? 'green' : 'yellow'