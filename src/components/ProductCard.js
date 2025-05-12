import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card product-card m-2" style={{ width: '18rem' }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-danger fw-bold">€{product.price.toFixed(2)}</p>
        <button 
          className="btn btn-success w-100" 
          onClick={() => addToCart(product)}
        >
          Aggiungi al Carrello
        </button>
      </div>
    </div>
  );
};

export default ProductCard;