import React from 'react'
import Filter from './Filter'
import Search from './Search'

const ToolBar = ({onRegionChange, setQuery}) => {
  return (
    <div>
      <Search setQuery={setQuery} />
      <Filter onRegionChange={onRegionChange}/>
    </div>
  )
} 

export default ToolBar
