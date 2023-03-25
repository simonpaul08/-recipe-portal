import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import RecipeCard from '../components/RecipeCard'

const Home = () => {

  const [recipes, setRecipes] = useState([])
  const [cookies, _] = useCookies()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('http://localhost:3001/recipes')
      const data = await response.json()
      setRecipes(data)
    }

    fetchRecipes()
  }, [])

  if(recipes.length === 0) return <Loader />

  return (
    <div className='home'>
        <Navbar /> 
        <div className="mt-4 py-3 container d-flex justify-content-center align-items-center flex-column">
          {recipes?.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe._id}/>
          })}
        </div>
    </div>
  )
}

export default Home