import axios from "axios"
import { useEffect, useState } from "react"
import RecipeListCard from "../components/RecipeListCard"
import Loader from '../components/Loader'
import { Link } from "react-router-dom"
import { useGetUserId } from "../hooks/useGetUserId"
import { useAuthContext } from "../context/AuthContext"

const Profile = () => {
  const [recipes, setRecipes] = useState()
  const { currentUser } = useAuthContext()
  const userId = useGetUserId()
  const [alert, setAlert] = useState('')

  const handleDeleteRecipe = async (id) => {
    setAlert('')
    try {
      const deleteRecipe = await axios.delete(`${import.meta.env.VITE_API_KEY}/recipes/recipe/delete/${id}`)
      setAlert(deleteRecipe.data)
      setRecipes(recipes.filter(recipe => recipe._id !== id))
    }catch(e){
      console.log(e.response.data)
    }
  }

  useEffect(() => {

    const fetchRecipes = async () => {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/recipes/user/${userId}`)
      setRecipes(response.data)
    }

    fetchRecipes()

  }, [])



  return (
    <div className='py-3 profile__container px-4 '>
      {alert.length !== 0 && <div className="alert alert-success alert-dismissible fade show" role="alert">
        {alert}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert('')}></button>
      </div>}
      <div className="profile-header py-2 px-1 d-flex justify-content-between align-items-center mb-1">
        <p className="mb-0">My Account</p>
        <p className='mb-0'><i className="fa-solid fa-user me-2"></i>{currentUser && currentUser.username}</p>
      </div>
      <hr className="m-0 mb-3" />

      <div className="mb-2 text-center">
        <Link to="/createRecipe" className="btn btn-add-recipe">Add New Recipe</Link>
      </div>

      {recipes ? <div className="profile-body py-3">
        {recipes && recipes.map(r => <RecipeListCard key={r._id} recipe={r} id={r._id} handleDeleteRecipe={handleDeleteRecipe} />)}
      </div> : <Loader />}
    </div>
  )
}

export default Profile