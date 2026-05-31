import React from "react";

const Search = ({ setQuery }) => {
  return (
    <div className="relative shadow-md p-4 bg-white dark:bg-Blue-900 rounded-sm md:flex md:items-center md:px-0 md:py-3 md:w-[40%] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="ml-5 font-extrabold size-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        id="search"
        name="search"
        onChange={(e) => setQuery(e.target.value)}
        className="pl-15 w-full focus:outline-none placeholder:text-sm dark:placeholder:text-white dark:text-white md:pl-18"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
