import React from 'react'
import { useParams } from 'react-router-dom';
function Instruction() {
    const { recipeId } = useParams();
  return (
    <div>instruction: {recipeId}</div>
  )
}

export default Instruction