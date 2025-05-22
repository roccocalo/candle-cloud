import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { userInfo } = useAuth();

  const handleAddToCart = async () => {
    if (!userInfo) {
      alert('Devi effettuare il login per aggiungere prodotti al carrello');
      return;
    }
    
    try {
      // Passa l'ID del prodotto invece dell'oggetto completo
      await addToCart(product.id || product._id, 1);
    } catch (error) {
      console.error('Errore nell\'aggiunta al carrello:', error);
      alert('Si è verificato un errore nell\'aggiunta al carrello');
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.title} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted mb-1">{product.category}</p>
        <p className="card-text small mb-2">{product.description}</p>
        {product.burnTime && (
          <p className="card-text small text-muted">
            <i className="bi bi-fire"></i> Durata: {product.burnTime} ore
          </p>
        )}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 mb-0">€{product.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-button"
            onClick={handleAddToCart}
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;