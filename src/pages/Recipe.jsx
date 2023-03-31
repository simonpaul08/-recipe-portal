import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pasta from '../assets/pasta_full.jpg';
import Loader from '../components/Loader';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`http://localhost:3001/recipes/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ id })
            });
            const data = await response.json();
            setRecipe(data)

            const user = await fetch(`http://localhost:3001/auth/user/${data.userOwner}`)
            const userData = await user.json();
            setUser(userData)
        }

        fetchRecipe();
    }, [])

    if (!recipe) return <Loader />

    return (
        <div className='recipe_container p-2 mt-4 mb-4'>
            <img src={Pasta} alt="pasta" className='recipe_image mb-3' />
            <div className='px-3 py-2'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h3 className='mb-0'>{recipe.name}</h3>
                    <p className='mb-0'><i className="fa-solid fa-user me-2"></i>{user ? user.username : "unknown"}</p>
                </div>
                <p className='cookingTime'>Cooking Time -- {recipe.cookingTime} minutes</p>
                <p className='mb-3'>{recipe.description}</p>
                <p className='fw-bold fs-5 mb-2'>Ingredients</p>
                <ul className='ingredients mb-3 p-0'>
                    {recipe.ingredients.map((i, index) => <li key={index} className="ingredient mb-2"><i className="fa-solid fa-arrow-right me-2"></i>{i}</li>)}
                </ul>
                <p className='fw-bold fs-5 mb-2'>Instructions</p>
                <ul className='ingredients mb-3 p-0'>
                    {recipe.instruction.map((i, index) => <li key={index} className="ingredient mb-2"><i className="fa-solid fa-arrow-right me-2"></i>{i}</li>)}
                </ul>

            </div>

        </div>
    )
}

export default Recipe;