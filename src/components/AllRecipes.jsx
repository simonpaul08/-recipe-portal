import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import RecipeCard from './RecipeCard'

const AllRecipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:3001/recipes')
            const data = await response.json()
            setRecipes(data)
        }

        fetchRecipes()
    }, [])

    if (recipes.length === 0) return <Loader />

    return (
        <div className="py-3 container d-flex justify-content-between align-items-center">
            {recipes?.map(recipe => {
                return <RecipeCard recipe={recipe} key={recipe._id} />
            })}

            {recipes.length <= 2 && <div className='card mb-2 mx-2' style={{ border: 'none' }}>
            </div>}
        </div>
    )
}

export default AllRecipes