import React from 'react'

const SearchBar = () => {
  return (
    <form className='search__form px-3'>
      <i className="fa-solid fa-magnifying-glass me-2" style={{ color: '#2E4F4F' }}></i>
      <input type="text" className='searchbar__input px-1 py-2 w-100' placeholder='Search Recipe...' />
    </form>
  )
}

export default SearchBar