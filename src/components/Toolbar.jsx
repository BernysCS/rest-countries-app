import React from 'react'
import Filter from './Filter'
import Search from './Search'

const ToolBar = ({onRegionChange}) => {
  return (
    <div>
      <Search/>
      <Filter onRegionChange={onRegionChange}/>
    </div>
  )
} 

export default ToolBar
