import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('')
    }

    fetchRecipes()
  }, [])

  return (
    <div className='home'>
        <Navbar /> 
        <div className="mt-4 py-3 container d-flex justify-content-center align-items-center flex-column">
          
        </div>
    </div>
  )
}

export default Home