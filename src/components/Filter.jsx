import React from 'react'

const Filter = ({onRegionChange}) => {
  return (
    <div>
      <select onChange={e => onRegionChange(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
