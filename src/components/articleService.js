import axios from "axios";

const BASE_URL = "http://localhost:8080/api/articles";

export const getArticles = () => {
  return axios.get(BASE_URL);
};

export const getArticle = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};
