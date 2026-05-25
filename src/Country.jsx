import React from 'react'

const Country = ( {name, flag, alt, population, region, capital} ) => {
  return (
    <div>
      <img src={flag} alt={alt} />
      <h1>{name}</h1>
      <p>Population: {population} </p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default Country
