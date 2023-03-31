import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import RecipeCard from './RecipeCard'



const AllRecipes = () => {

    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [alert, setAlert] = useState('')



    useEffect(() => {
        const fetchRecipes = async () => {

            setIsLoading(true)

            try {
                const response = await axios.get('http://localhost:3001/recipes')
                const data = response.data
                setRecipes(data)
            } catch (e) {
                console.log(e.response.data)
                setIsLoading(false)
                setAlert(e.response.data)
            }

        }

        fetchRecipes()
    }, [])

    if (recipes.length && isLoading === 0) return <Loader />

    return (
        <>
            {alert.length !== 0 && <h3 className='text-center'>{alert}</h3>}
            <div className="py-3 container d-flex justify-content-between align-items-center">
                {recipes?.map(recipe => {
                    return <RecipeCard recipe={recipe} key={recipe._id} />
                })}

                {recipes.length <= 2 && <div className='card mb-2 mx-2' style={{ border: 'none' }}>
                </div>}
            </div>
        </>

    )
}

export default AllRecipes