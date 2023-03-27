import React from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [cookies, setCookies] = useCookies()
  const navigate = useNavigate()

  const handleLogout = () => {
    setCookies("access-token", "")
    window.localStorage.removeItem("userId")
    
  }

  return (
    <div className='navbar px-4'>
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <p className='mb-0 brand'>RECIPE</p>
        <div className='nav-items'>
          <Link to="/saved" className='nav-item mx-2'>Saved</Link>
          <Link to="/profile" className='nav-item mx-2'>Profile</Link>
          <Link to="/auth" className='nav-item mx-2 nav-btn py-2 px-3'>Login</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar