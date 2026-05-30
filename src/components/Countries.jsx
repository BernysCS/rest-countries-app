import React, { useEffect, useState } from "react";
import Country from "./Country";
import ToolBar from "./ToolBar";

const Countries = ({region, onRegionChange}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,capital,population,region,capital",
    )
      .then((res) => res.json())
      .then((cont) => setCountries(cont))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = region
    ? countries.filter((c) => c.region === region)
    : countries;

  return (
    <div className="md:mx-auto md:max-w-6xl">
      <ToolBar onRegionChange={onRegionChange} />
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
