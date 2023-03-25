
const RecipeCard = ({  }) => {
    return (
        <div className="card">
                <div className="card-body" style={{ width: '18em' }}>
                    <h3 className="card-title mb-4">Card title</h3>
                    <p className="card-text mb-3">Cooking Time - 90 Minutes</p>
                    <h5 className="mb-0">Ingredients</h5>
                </div>
                <ul className="list-group list-group-flush mb-2">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>

                <div className="mb-2">
                    <p className="mb-0"></p>
                </div>
        </div>
    )
}

export default RecipeCard