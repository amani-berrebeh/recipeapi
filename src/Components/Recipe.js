import React from 'react'

const Recipe = ({elem}) => {
    console.log(elem)
  return (
    <div> <h1> {elem.recipe.label} </h1>
    <img src={elem.recipe.image} alt="" />
    </div>
  )
}

export default Recipe