import React from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [cookies, setCookies] = useCookies()
  const navigate = useNavigate()

  const handleLogout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userId")
  }

  return (
    <div className='navbar'>
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <p className='mb-0 brand'>RECIPE</p>
        <div>
          {cookies['access-token'] && <Link to="/createRecipe" className='btn btn-warning mx-2'>Create Recipe</Link>}
          { cookies['access-token'] ? <button className='btn btn-dark' onClick={handleLogout}>Logout</button> : <Link to="/auth" className='btn btn-primary'>Login</Link>}
        </div>

      </div>
    </div>
  )
}

export default Navbar