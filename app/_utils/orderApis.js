const { default: axiosInstance } = require("./axiosInstance");

const createOrder=(data)=>axiosInstance.post('/orders',data);
const getAllOrders = () => axiosInstance.get('/orders');

export default {
    createOrder,
getAllOrders}