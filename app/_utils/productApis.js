const { default: axiosInstance } = require("./axiosInstance")

const getLatestProducts = ()=>{
    return axiosInstance.get('/products?populate=*')
}
const getProductById = (id)=>{
    return axiosInstance.get(`/products/${id}?populate=*`)
}
const getProductByCategory=(category)=>{
    return axiosInstance.get(`/products?filters[category][$eq]=${category}&populate=*`

)
}
export default {
    getLatestProducts,
    getProductById,
    getProductByCategory
}