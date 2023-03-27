import React from 'react'

const SearchBar = () => {
  return (
    <form className='search__form'>
        <input type="text" className='searchbar__input px-4 py-2 w-100' placeholder='Search Recipe...'/>
    </form>
  )
}

export default SearchBar