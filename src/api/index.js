import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async country1 => {
  let changeurl = url;

  if (country1) {
    changeurl = `${url}/countries/${country1}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeurl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDaily = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchcountry = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};
