import axios from "axios";

export const fetchData = (token: string = "") => {
  const BASE_URL = "https://code-store-backend.herokuapp.com";
  const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (token !== "") {
    /* Config para consultas privada */
    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
      if (config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : "";
      }
      return config;
    });
    return instance;
  } else {
    /* Config para consulta públicas */
    let instance = axios.create(defaultOptions);
    return instance;
  }
};
