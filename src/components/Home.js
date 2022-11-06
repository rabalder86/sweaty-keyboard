import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Home.css";

function FetchApi() {
  const [brewery, setBrewery] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=50")
      .then((response) => response.json())
      .then((result) => {
        setBrewery(result);
      });
  }, []);

  return (
    <>
      <input
        id="sok"
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {brewery && (
        <ol id="content">
          {brewery
            .filter((brewery) =>
              brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((brewery) => (
              <li className="listen" key={brewery.id}>
                <h3>Name: {brewery.name}</h3>
                <h3>City: {brewery.city}</h3>
                {/* <h3>State: {brewery.state}</h3>
                <h3>Country: {brewery.country}</h3>
                <h3>Type: {brewery.brewery_type}</h3> */}
              </li>
            ))}
        </ol>
      )}
    </>
  );
}
export default FetchApi;
