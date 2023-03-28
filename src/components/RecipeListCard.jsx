import React from 'react'
import { Link } from 'react-router-dom'

const RecipeListCard = () => {
  return (
    <div className='recipe-list-card mb-3 px-3 py-3 d-flex justify-content-between align-items-center'>
        <Link to="/" className='mb-0'>Recipe Name <span className='ms-2 cookingTime'>Cooking Time</span></Link>
        <div className='recipe-options d-flex align-items-center'>
            <p className='mb-0 mx-2 recipe-option'><i class="fa-solid fa-pen-to-square me-1"></i> Edit</p>
            <p className='mb-0 mx-2 recipe-option'><i class="fa-solid fa-trash me-1"></i> Delete</p>
        </div>
    </div>
  )
}

export default RecipeListCard