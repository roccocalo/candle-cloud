import React from 'react';

const ProductCard = ({ product, addToCart }) => {
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
            className="btn btn-primary btn-sm"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus"></i> Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;