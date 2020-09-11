import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Cards, CountryPicker } from "./Components";
import { fetchData } from "./api/index";

const App = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    handleCountryChange();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);

    console.log(fetchdata);
    setdata(fetchdata);
  };

  return (
    <>
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
      </div>
    </>
  );
};

export default App;
