import React from 'react'

const Filter = ({onRegionChange}) => {
  return (
    <div>
      <select onChange={e => onRegionChange(e.target.value)} className='shadow-md my-10 p-4 w-[60%] text-sm focus:outline-none bg-white dark:bg-Blue-900 dark:text-white rounded-sm md:my-0 md:px-3 md:w-auto'>
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
