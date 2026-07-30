import axios from "axios";

const BASE_URL = "https://newswebsite-backend-1.onrender.com";

export const getArticles = () => {
  return axios.get(BASE_URL);
};

export const getArticle = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const getFeaturedArticles = () => {
  return api.get(`${BASE_URL}/featured`);
};
