import axios from "axios"
import { useEffect, useState } from "react"
import RecipeListCard from "../components/RecipeListCard"
import { useAuthContext } from "../context/AuthContext"
import { useGetUserId } from "../hooks/useGetUserId"
import Loader from '../components/Loader'

const Profile = () => {

  const userId = useGetUserId()
  const [recipes, setRecipes] = useState()
  const { currentUser } = useAuthContext()

  useEffect(() => {

    const fetchRecipes = async () => {
      const response = await axios.post(`http://localhost:3001/recipes/user/${userId}`)
      setRecipes(response.data)
    }

    fetchRecipes()

  }, [])



  return (
    <div className='py-3 profile__container px-4 '>
      <div className="profile-header py-2 px-1 d-flex justify-content-between align-items-center mb-1">
        <p className='mb-0'>My Account</p>
        <p className='mb-0'><i className="fa-solid fa-user me-2"></i>{currentUser && currentUser.username}</p>
      </div>
      <hr className="m-0 mb-3" />

      {recipes ? <div className="profile-body py-3">
        {recipes && recipes.map(r => <RecipeListCard key={r._id} recipe={r}/>)}
      </div> : <Loader />}
    </div>
  )
}

export default Profile