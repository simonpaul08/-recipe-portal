import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column pb-0">
        <div className="sidebar__header py-4 px-3 d-flex justify-content-center align-items-center">
            <p className="logo mb-0">DEMO</p>
        </div>

        <div className="sidebar__body py-4 px-3">
            <Link to="/" className="sidebar-item py-3 border rounded mb-3 px-3 active-item"> <i class="fa-solid fa-house me-2"></i> Home</Link>
            <Link to="/saved" className="sidebar-item py-3 border rounded mb-3 px-3"><i className="fa-solid fa-star me-2"></i> Saved</Link>
            <Link to="/profile" className="sidebar-item py-3 border rounded mb-3 px-3"><i className="fa-solid fa-user me-2"></i> Profile</Link>
        </div>

        <div className="mt-auto">
            <button className="w-100 sidebar-btn py-3">Login</button>
        </div>
        
    </div>
  )
}

export default SideBar