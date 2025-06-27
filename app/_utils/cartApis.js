const { default: axiosInstance } = require("./axiosInstance")

const addToCart =(payload) => {
    return axiosInstance.post('/carts', { data: payload })}
const getCart=(email) => axiosInstance.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}	`)

const deleteCartItem =(cartId)=>{
    return axiosInstance.delete(`/carts/${cartId}`)
}
export default {addToCart,getCart,deleteCartItem};