const { default: axiosInstance } = require("./axiosInstance")

const getLatestProducts = ()=>{
    return axiosInstance.get('/products?populate=*')
}
const getProductById = (id)=>{
    return axiosInstance.get(`/products/${id}?populate=*`)
}
const getProductByCategory=(category)=>{
return axios.get(`http://localhost:1337/api/products?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`);
}
const getProductByType=(Type)=>{
return axios.get(`http://localhost:1337/api/products?filters[Type][$eq]=${encodeURIComponent(Type)}&populate=*`);
}
const getBestSellingProducts = ()=>{
    return axios.get('http://localhost:1337/api/products?populate=*&filters[isBestseller][$eq]=true')
}
// const getBlogs=()=>{
//     return axiosInstance.get('/blogs?populate=*')
// }
import axios from 'axios';

const getBlogs = () =>
  axios.get('http://localhost:1337/api/blogs?populate=*', {
    headers: {
    },
  });
 const getVideos= () =>
  axios.get('http://localhost:1337/api/videos?populate=*', {
    headers: {
    },
  });
const getWishlistByEmail=(email) =>
  axios.get(
    `http://localhost:1337/api/wishlists?filters[userEmail][$eq]=${email}&populate[products][populate]=banner`
  );
const getWishlistById= (wishlistId) =>
axios.get(
    `http://localhost:1337/api/wishlists?filters[id][$eq]=${wishlistId}&populate[products][populate]=banner`
  )
  
const updateWishlistProducts = (wishlistId, productIds) =>
  axios.put(`http://localhost:1337/api/wishlists/${wishlistId}`, {
    data: {
      products: productIds,
    },
  });

    const addToWishlist= (productId, email) =>
    axios.post('http://localhost:1337/api/wishlists', {
      
      data: {
        userEmail: email,
        products: [productId] // If relation is many-to-many

      },
      
    })

  const removeFromWishlist = async(productId, email) => {
    const res = await axios.get(
      `http://localhost:1337/api/wishlists?filters[email][$eq]=${email}&filters[product][id][$eq]=${productId}`
    );

    const wishlistItem = res.data.data[0];
    if (!wishlistItem) return;

    return axios.delete(`http://localhost:1337/api/wishlists/${wishlistItem.id}`);
  }
export default {
    getLatestProducts,
    getProductById,
    getProductByCategory,
    getBestSellingProducts,
    getBlogs,
    getVideos,
    getWishlistByEmail,
    updateWishlistProducts,
    getWishlistById,
    addToWishlist,
    removeFromWishlist,
    getProductByType
}