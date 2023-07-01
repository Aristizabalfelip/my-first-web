import React from 'react'


const PaintPokemons = ({nam, img, id}) => {
    
    return ( 
        <div >
            <p>{id}</p>
            <img src= {img} alt="" />
            <p>{nam}</p>
            <button onClick={() => {
                console.log(`my name is ${nam}`, );
            }}>look at me</button>
        </div>
    )
}
export default PaintPokemons