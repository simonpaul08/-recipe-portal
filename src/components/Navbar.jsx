import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [cookies, setCookies] = useCookies()

  const handleLogout = () => {
    setCookies("access-token", "")
    window.localStorage.removeItem("userId")
  }

  return (
    <div className='navbar px-4'>
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <Link to="/" className='mb-0 brand'>RECIPE</Link>
        <div className='nav-items'>
          {cookies['access-token'] && <Link to="/saved" className='nav-item mx-2'>Saved</Link>}
          {cookies['access-token'] && <Link to="/profile" className='nav-item mx-2'>Profile</Link>}
          {cookies['access-token'] ? <Link className='nav-item mx-2 nav-btn' onClick={handleLogout}>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></Link>
          : <Link to="/auth" className='nav-item mx-2 nav-btn'>Login <i className="fa-solid fa-user ms-1"></i></Link>}

        </div>

      </div>
    </div>
  )
}

export default Navbar