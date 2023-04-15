import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetUserId } from '../hooks/useGetUserId'

const CreateRecipe = () => {

    const navigate = useNavigate()
    const [alert, setAlert] = useState('')

    const userId = useGetUserId()

    const [recipe, setRecipe] = useState({
        name: '',
        imageUrl: '',
        cookingTime: 0,
        ingredients: [''],
        instructions: [''],
        description: '',
        userOwner: userId
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    }

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })
    }

    const addInstruction = () => {
        setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] })
    }

    const handleIngredient = (e, index) => {
        const { value } = e.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients })
    }

    const handleInstruction = (e, index) => {
        const { value } = e.target;
        const instruction = recipe.instructions;
        instruction[index] = value;
        setRecipe({ ...recipe, instruction })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_KEY}/recipes`, recipe)
            navigate('/profile')
        } catch (e) {
            console.error(e)
            setAlert(e.response.data)
        }
    }


    return (
        <div className="recipe_container p-4">
            {alert.length !== 0 && <div className="alert alert-danger mb-3 w-100" role="alert">
                {alert}
            </div>}
            <form className="recipe-form" onSubmit={handleFormSubmit}>

                <h3 className="mb-3 text-center">Create New Recipe</h3>

                <div className="mb-2">
                    <input type="text" name="name"
                        className="form-control"
                        placeholder="Name" onChange={handleOnChange} />
                </div>

                <div className="mb-2">
                    <input type="text" name="imageUrl" className="form-control"
                        placeholder="ImageUrl" onChange={handleOnChange} />
                </div>

                <div className="mb-2">
                    <input type="text" name="description" className="form-control"
                        placeholder="description" onChange={handleOnChange} />
                </div>

                <div className="mb-2">
                    <input type="number" name="cookingTime" className="form-control"
                        placeholder="CookingTime" onChange={handleOnChange} />
                </div>

                {recipe.ingredients.map((ingredient, index) => {
                    return (
                        <div className="mb-2" key={index}>
                            <input type="text" name="ingredient" className="form-control"
                                placeholder="Ingredient"
                                value={ingredient}
                                onChange={(e) => handleIngredient(e, index)} />
                        </div>
                    )
                })}
                <div className="mb-3">
                    <button type="button" className="btn btn-dark w-100" onClick={addIngredient}>
                        Add Ingredient
                    </button>
                </div>

                {recipe.instructions.map((instruction, index) => {
                    return (
                        <div className="mb-2" key={index}>
                            <input type="text" name="instruction" className="form-control"
                                placeholder="Instruction"
                                value={instruction}
                                onChange={(e) => handleInstruction(e, index)} />
                        </div>
                    )
                })}

                <div className="mb-4">
                    <button type="button" className="btn btn-dark w-100" onClick={addInstruction}>
                        Add Instructions
                    </button>
                </div>

                <div className="mb-2">
                    <button className="btn btn-success w-100" type="submit">Save Recipe</button>
                </div>

            </form>
        </div>
    )
}

export default CreateRecipe