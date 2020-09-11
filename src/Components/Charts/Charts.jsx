import React, { useState, useEffect } from "react";
import { fetchDaily } from "../../api/index";

const Charts = () => {
  const [dailyupdate, setdailyupdate] = useState({});

  const fetchdailyupdate = async () => {
    const fetchupdate = await fetchDaily();
    // console.log(fetchupdate);
  };

  fetchdailyupdate();

  return <></>;
};

export default Charts;
