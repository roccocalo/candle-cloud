import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  // Calcola il totale
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Il Tuo Carrello</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-5 bg-white rounded shadow-sm p-5">
          <i className="bi bi-cart-x" style={{ fontSize: '4rem', color: 'var(--accent-color)' }}></i>
          <p className="fs-4 mb-4 mt-3">
            Il tuo carrello è vuoto.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
            Inizia lo Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded-3 shadow-sm mb-4">
              <h4 className="mb-4 border-bottom pb-3">Articoli nel Carrello ({cart.length})</h4>
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  updateQuantity={updateQuantity} 
                  removeFromCart={removeFromCart} 
                />
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="order-summary">
              <h4 className="order-summary-title">Riepilogo Ordine</h4>
              
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotale</span>
                <span className="fw-bold">€{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Spedizione</span>
                <span className="fw-bold">€{shipping.toFixed(2)}</span>
              </div>
              
              <hr className="my-4" />
              
              <div className="d-flex justify-content-between mb-4">
                <span className="fs-5">Totale</span>
                <span className="fs-4 fw-bold">€{total.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn w-100 mb-3">
                Procedi al Checkout
              </button>
              
              <Link to="/products" className="btn btn-outline-secondary w-100 rounded-pill">
                Continua lo Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;