import React, { createContext, useState, useContext, useEffect } from 'react';
import { cartService } from '../services/cartService';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { userInfo } = useAuth();

  // Carica il carrello quando l'utente è autenticato
  useEffect(() => {
    const loadCart = async () => {
      if (userInfo && userInfo.token) {
        try {
          const cart = await cartService.getCartItems(userInfo.token);
          console.log('Carrello caricato:', cart); // Debug
          setCartItems(cart.items || []);
        } catch (error) {
          console.error('Errore nel caricamento del carrello:', error);
          setCartItems([]);
        }
      }
    };

    loadCart();
  }, [userInfo]);

  const addToCart = async (productId, quantity = 1) => {
    try {
      if (!userInfo) return;
      
      // Ora accetta direttamente l'ID del prodotto
      const updatedCart = await cartService.addCartItem(
        productId,
        quantity,
        userInfo.token
      );
      console.log('Carrello aggiornato dopo aggiunta:', updatedCart); // Debug
      setCartItems(updatedCart.items || []);
    } catch (error) {
      console.error('Errore nell\'aggiunta al carrello:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (!userInfo) return;
      
      console.log('Rimozione prodotto dal carrello:', productId); // Debug
      const updatedCart = await cartService.removeCartItem(productId, userInfo.token);
      console.log('Carrello aggiornato dopo rimozione:', updatedCart); // Debug
      setCartItems(updatedCart.items || []);
    } catch (error) {
      console.error('Errore nella rimozione dal carrello:', error);
    }
  };

  const clearCart = async () => {
    try {
      if (!userInfo) return;
      
      console.log('Svuotamento carrello'); // Debug
      const result = await cartService.clearCart(userInfo.token);
      console.log('Risultato svuotamento carrello:', result); // Debug
      setCartItems([]);
    } catch (error) {
      console.error('Errore nello svuotamento del carrello:', error);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,  // Aggiungi la nuova funzione
      cartItems: cartItems || [], // Assicuriamoci che sia sempre un array
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);