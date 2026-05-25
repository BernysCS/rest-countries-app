import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=flags,name,capital,population,region,capital")
      .then((res) => res.json())
      .then((cont) => setCountries(cont))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {countries.map((country) => {
        return (
          <Country
            key={country.name.common}
            flag={country.flags.png}
            altFlag={country.flags.alt || country.name.common}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0] || "N/A"}
          />
        );
      })}
    </div>
  );
};

export default Countries;
