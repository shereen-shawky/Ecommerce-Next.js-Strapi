const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = "https://strapi-project-production-1067.up.railway.app/api";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});
export default axiosInstance;