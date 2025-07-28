import axios from "axios";

const BASE_URL = "https://strapi-project-production-1067.up.railway.app/api";

const getLatestProducts = () => {
  return axios.get(`${BASE_URL}/products?populate=*`);
};

const getProductById = (id) => {
  return axios.get(`${BASE_URL}/products/${id}?populate=*`);
};

const getProductByCategory = (category) => {
  return axios.get(
    `${BASE_URL}/products?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`
  );
};

const getProductByType = (Type) => {
  return axios.get(
    `${BASE_URL}/products?filters[Type][$eq]=${encodeURIComponent(Type)}&populate=*`
  );
};

const getBestSellingProducts = () => {
  return axios.get(
    `${BASE_URL}/products?populate=*&filters[isBestseller][$eq]=true`
  );
};

const getBlogs = () => {
  return axios.get(`${BASE_URL}/blogs?populate=*`);
};

const getVideos = () => {
  return axios.get(`${BASE_URL}/videos?populate=*`);
};

export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
  getBestSellingProducts,
  getBlogs,
  getVideos,
  getProductByType,
};
