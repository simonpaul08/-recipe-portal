import { Link } from 'react-router-dom';
import Pasta from '../assets/pasta_full.jpg';


const RecipeCard = ({ recipe }) => {
    return (
        <Link to={recipe._id} className="col-md-4 col-lg-3 col-sm-4 mb-4 justify-content-center">
            <div className='card'>
                <div className="card-header p-2" style={{ backgroundImage: `url(${Pasta})` }}>
                    {/* <img src={Pasta} alt="image" className='image'/> */}
                </div>
                <div className="card-body">
                    <h3 className="card-title mb-2 recipe-card-title">{recipe.name}</h3>
                    <p className="card-text mb-2 cookingTime">Cooking Time - {recipe.cookingTime} Minutes</p>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard