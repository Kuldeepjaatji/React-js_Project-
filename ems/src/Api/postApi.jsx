import axios from "axios";

const api = axios.create({
    baseURL:"https//restcountries.come/v3.1",
});

// HTTP GET METHOR


export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};
