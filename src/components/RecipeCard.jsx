import { Link } from 'react-router-dom';
import Pasta from '../assets/pasta_full.jpg';


const RecipeCard = ({ recipe }) => {
    return (
        <Link to={recipe._id} className="card mb-2 mx-2">
            <div className="card-header p-2" style={{ backgroundImage: `url(${Pasta})` }}>
                {/* <img src={Pasta} alt="image" className='image'/> */}
            </div>
            <div className="card-body">
                <h3 className="card-title mb-3">box</h3>
                <p className="card-text mb-3">Cooking Time - {recipe.cookingTime} Minutes</p>
            </div>
        </Link>
    )
}

export default RecipeCard