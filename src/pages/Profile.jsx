import RecipeListCard from "../components/RecipeListCard"

const Profile = () => {
  return (
    <div className='py-3 profile__container px-4 '>
      <div className="profile-header py-2 px-1 d-flex justify-content-between align-items-center mb-1">
        <p className='mb-0'>My Account</p>
        <p className='mb-0'>Name</p>
      </div>
      <hr className="m-0 mb-3"/>

      <div className="profile-body py-3">
        <RecipeListCard />
        <RecipeListCard />
      </div>
    </div>
  )
}

export default Profile