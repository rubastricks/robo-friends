import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search for a Robotic"
        type="search"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
