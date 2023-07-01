import React from 'react'

const ButtonsNumber = ({ number }) => {
  const primo = (number) => {
    if (number <= 1) {
      return  number % 2 == 0 ? 'green' : 'yellow';
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return  number % 2 == 0 ? 'green' : 'yellow';
      }
    }
    return 'primo'
  }
  return (
    <div>
      <button className={primo(number)}>{number}</button>
    </div>
  )
}
export default ButtonsNumber

