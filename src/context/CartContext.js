import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Carica il carrello dal localStorage all'avvio
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  // Salva il carrello nel localStorage quando cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // Aggiungi un prodotto al carrello
  const addToCart = (product) => {
    setCart(prevCart => {
      // Controlla se il prodotto è già nel carrello
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Aggiorna la quantità se il prodotto è già nel carrello
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Aggiungi il nuovo prodotto al carrello
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  // Aggiorna la quantità di un prodotto nel carrello
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Se la quantità è 0 o meno, rimuovi il prodotto
      removeFromCart(productId);
    } else {
      setCart(prevCart => 
        prevCart.map(item => 
          item.id === productId 
            ? { ...item, quantity: newQuantity } 
            : item
        )
      );
    }
  };
  
  // Rimuovi un prodotto dal carrello
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  // Calcola il numero totale di articoli nel carrello
  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        updateQuantity, 
        removeFromCart,
        getCartItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};