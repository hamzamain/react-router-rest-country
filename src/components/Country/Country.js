import React from "react";
import { useLoaderData } from "react-router-dom";

const Country = () => {
  const countryData = useLoaderData();
  const country = countryData[0];
  console.log(country);
  return (
    <div>
      <h1>Country details</h1>
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} skm</p>
      <img src={country.flags.png} alt="" />
      <p>Capital: {country.capital}</p>
      <p>Continents: {country.continents}</p>
    </div>
  );
};

export default Country;
