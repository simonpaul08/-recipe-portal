import { useEffect, useState } from "react"
import RecipeListCard from "../components/RecipeListCard"
import { useGetUserId } from "../hooks/useGetUserId"

const Profile = () => {

  const [recipes, setRecipes] = useState()
  const userId = useGetUserId()
  console.log(userId)

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`http://localhost:3001/recipes/user/${userId}`)
      const data = await response.json()
      console.log(data)
    }

    fetchRecipes()

  }, [])

  return (
    <div className='py-3 profile__container px-4 '>
      <div className="profile-header py-2 px-1 d-flex justify-content-between align-items-center mb-1">
        <p className='mb-0'>My Account</p>
        <p className='mb-0'>Name</p>
      </div>
      <hr className="m-0 mb-3" />

      <div className="profile-body py-3">
        <RecipeListCard />
        <RecipeListCard />
      </div>
    </div>
  )
}

export default Profile