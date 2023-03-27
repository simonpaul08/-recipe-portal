import React, { useEffect, useState } from 'react'
import AllRecipes from './AllRecipes'
import SearchBar from './SearchBar'

const Main = () => {

    return (
        <div className='main'>
            <div className="main__header py-2 px-3 d-flex justify-content-center align-items-center mb-3">
                <SearchBar />
            </div>
            <AllRecipes />
        </div>

    )
}

export default Main