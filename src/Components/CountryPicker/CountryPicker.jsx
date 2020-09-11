import React, { useState, useEffect } from "react";
import { fetchcountry } from "../../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = props => {
  const [fetchcountries, setfetchcountries] = useState([]);

  const fetchedcountry = async () => {
    const data = await fetchcountry();
    setfetchcountries(data);
  };

  useEffect(() => {
    fetchedcountry();
  }, []);

  return (
    <>
      <FormControl>
        <NativeSelect
          default=""
          onChange={event => props.handleCountryChange(event.target.value)}
        >
          <option>Global</option>
          {fetchcountries.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
