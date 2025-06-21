import axios from 'axios';

const API_URL = 'https://candlecloud-backend.onrender.com/api/cart';

const getCartItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const addCartItem = async (productId, quantity, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, { productId, quantity }, config);
  return response.data;
};

const removeCartItem = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${productId}`, config);
  return response.data;
};

const clearCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/clear`, config);
  return response.data;
};

export const cartService = {
  getCartItems,
  addCartItem,
  removeCartItem,
  clearCart,
};