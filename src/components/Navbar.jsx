import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [_, setCookies] = useCookies()
    const navigate = useNavigate()

    const handleLogout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userId")
        navigate('/auth')
    }

  return (
    <div className='navbar'>
        <div className="container py-2 d-flex justify-content-between align-items-center">
            <p className='mb-0 brand'>RECIPE</p>
            <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar