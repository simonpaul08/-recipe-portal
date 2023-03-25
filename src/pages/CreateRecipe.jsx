import { useState } from "react"
import { useGetUserId } from '../hooks/useGetUserId'

const CreateRecipe = () => {

    const userId  = useGetUserId()

    const [recipe, setRecipe] = useState({
        name: '',
        imageUrl: '',
        cookingTime: 0,
        ingredients: [''],
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

    const handleIngredient = (e, index) => {
        const { value } = e.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {   
            await fetch('http://localhost:3001/recipes', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                }, 
                body: JSON.stringify(recipe)
            })

            alert('Recipe Created');
        }catch (e) {
            console.error(e)
        } 
    }


  return (
    <div className="recipe_container">
        <form className="recipe-form" onSubmit={handleFormSubmit}>

            <h3 className="mb-3">Create New Recipe</h3>

            <div className="mb-2">
                <input type="text" name="name" 
                className="form-control"
                placeholder="Name" onChange={handleOnChange}/>
            </div>
            
            <div className="mb-2">
                <input type="text" name="imageUrl" className="form-control"
                placeholder="ImageUrl" onChange={handleOnChange}/>
            </div>

            <div className="mb-2">
                <input type="number" name="cookingTime" className="form-control"
                placeholder="CookingTime" onChange={handleOnChange}/>
            </div>

            {recipe.ingredients.map((ingredient, index) => {
                return (
                    <div className="mb-2" key={index}>
                        <input type="text" name="ingredient" className="form-control"
                        placeholder="Ingredient"
                        value={ingredient}
                        onChange={(e) => handleIngredient(e, index)}/>
                    </div>
                )
            })}
            <div className="mb-2">
                <button type="button" className="btn btn-dark w-100" onClick={addIngredient}>
                    Add Ingredient
                </button>
            </div>

            <div className="mb-4">
                <input type="text" name="description" className="form-control"
                placeholder="description" onChange={handleOnChange}/>
            </div>

            <div className="mb-2">
                <button className="btn btn-success w-100" type="submit">Save Recipe</button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateRecipe