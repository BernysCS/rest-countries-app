import React from "react";

const Country = ({ name, flag, alt, population, region, capital }) => {
  return (
    <div className="bg-white dark:bg-Blue-900 w-80 shadow-md overflow-hidden rounded-sm mb-10 md:w-full md:mb-0">
      <div>
        <img className="object-cover h-50 w-80 md:w-full md:h-35 " src={flag} alt={alt} />
      </div>
      <div className="px-7 pb-11 pt-7">
        <h1 className="pb-4 font-extrabold text-Grey-950 dark:text-white">{name}</h1>
        <p className="text-sm font-semibold text-Grey-950 dark:text-white">Population: <span className="font-light text-Grey-950 dark:text-white">{population}</span> </p>
        <p className="text-sm py-1 font-semibold text-Grey-950 dark:text-white">Region: <span className="font-light text-Grey-950 dark:text-white">{region}</span></p>
        <p className="text-sm font-semibold text-Grey-950 dark:text-white">Capital: <span className="font-light text-Grey-950 dark:text-white">{capital}</span></p>
      </div>
      
    </div>
  );
};

export default Country;
