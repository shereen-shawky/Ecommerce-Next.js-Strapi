const { default: axiosInstance } = require("./axiosInstance")

const addTowishlist =(payload) => {
    return axiosInstance.post('/wishlists', { data: payload })}

const getwishlist = (email) => {
  // Properly encode the email and format the URL
  const encodedEmail = encodeURIComponent(email);
  return axiosInstance.get(
    `/wishlists?filters[userEmail][$eq]=${encodedEmail}&populate[products][populate]=*`
  );
};
const deletewishlistItem =(wishlistID)=>{
    return axiosInstance.delete(`/wishlists/${wishlistID}`)
}
export default {addTowishlist,getwishlist,deletewishlistItem};