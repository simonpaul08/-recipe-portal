import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pasta from '../assets/pasta.png';
import Loader from '../components/Loader';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState()

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

            const user = await fetch(``)
        }

        fetchRecipe();
    }, [])

    if (!recipe) return <Loader />

    return (
        <div className='recipe_container py-4 px-2 mt-4'>
            <img src={Pasta} alt="pasta" className='recipe_image mb-4' />

            <h3>{recipe.name}</h3>
            <p>{recipe.cookingTime}</p>
            <ul className='ingredients mb-3'>
                {recipe.ingredients.map((i, index) => <li key={index}>{i}</li>)}
            </ul>
            <p>{recipe.description}</p>
        </div>
    )
}

export default Recipe;