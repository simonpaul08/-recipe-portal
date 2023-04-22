import React from 'react'
import { Link } from 'react-router-dom'

const RecipeListCard = ({ recipe, handleDeleteRecipe, id }) => {


  return (
    <div className='recipe-list-card mb-3 px-3 py-3 d-flex justify-content-between align-items-center'>
        <Link to="/" className='mb-0'>{recipe.name} <span className='ms-2 cookingTime'>Cooking Time - {recipe.cookingTime} mins</span></Link>
        <div className='recipe-options d-flex align-items-center'>
            <p className='mb-0 mx-2 recipe-option' onClick={() => handleDeleteRecipe(id)}><i className="fa-solid fa-trash me-1"></i> Delete</p>
        </div>
    </div>
  )
}

export default RecipeListCard