import React, { useEffect, useState } from "react";
import Country from "./Country";
import ToolBar from "./ToolBar";

const Countries = ({ region, onRegionChange, query, setQuery }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,capital,population,region,capital",
    )
      .then((res) => res.json())
      .then((cont) => setCountries(cont))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries
    .filter((c) => (region ? c.region === region : true))
    .filter((c) =>
      query ? c.name.common.toLowerCase().includes(query.toLowerCase()) : true,
    );

  return (
    <div className="md:mx-auto md:max-w-6xl p-6 md:p-0">
      <ToolBar onRegionChange={onRegionChange} setQuery={setQuery} />
      {filteredCountries.map((country) => (
        <Country
          key={country.name.common}
          flag={country.flags.png}
          altFlag={country.flags.alt || country.name.common}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0] || "N/A"}
        />
      ))}
    </div>
  );
};

export default Countries;
