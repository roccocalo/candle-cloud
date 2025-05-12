import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In un'applicazione reale, qui faresti una chiamata API
    // Per semplicità, utilizziamo dati di esempio
    const sampleProducts = [
      {
        id: 1,
        title: 'Smartphone XYZ',
        price: 499.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/500',
        description: 'Un potente smartphone con le ultime tecnologie. Dotato di processore octa-core, 8GB di RAM e 128GB di memoria interna. Display AMOLED da 6.5 pollici con risoluzione Full HD+. Fotocamera principale da 64MP e batteria da 5000mAh con ricarica rapida.'
      },
      {
        id: 2,
        title: 'Laptop Pro',
        price: 999.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/500',
        description: 'Laptop professionale per lavoro e gaming. Processore Intel Core i7 di ultima generazione, 16GB di RAM DDR4 e SSD da 512GB. Scheda grafica NVIDIA GeForce RTX 3060 per prestazioni grafiche eccezionali. Display da 15.6 pollici con risoluzione 4K e refresh rate di 144Hz.'
      },
      {
        id: 3,
        title: 'T-Shirt Premium',
        price: 29.99,
        category: 'clothing',
        image: 'https://via.placeholder.com/500',
        description: 'T-shirt di alta qualità in cotone 100%. Tessuto morbido e traspirante, ideale per l\'uso quotidiano. Disponibile in vari colori e taglie. Lavabile in lavatrice e resistente ai lavaggi frequenti.'
      },
      {
        id: 4,
        title: 'Scarpe Sportive',
        price: 89.99,
        category: 'clothing',
        image: 'https://via.placeholder.com/500',
        description: 'Scarpe comode per attività sportive. Suola in gomma antiscivolo e ammortizzata per il massimo comfort. Tomaia in materiale traspirante per mantenere i piedi freschi durante l\'attività fisica. Design moderno e accattivante.'
      },
      {
        id: 5,
        title: 'Orologio Elegante',
        price: 199.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/500',
        description: 'Orologio elegante per ogni occasione. Cassa in acciaio inossidabile e cinturino in pelle genuina. Movimento al quarzo di alta precisione e vetro zaffiro antigraffio. Resistente all\'acqua fino a 50 metri.'
      },
      {
        id: 6,
        title: 'Borsa Designer',
        price: 149.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/500',
        description: 'Borsa di design per un look sofisticato. Realizzata in pelle di alta qualità con finiture accurate. Spaziosa e funzionale, con tasche interne e scomparto per laptop. Disponibile in vari colori.'
      }
    ];
    
    setTimeout(() => {
      const foundProduct = sampleProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 500); // Simuliamo un ritardo di caricamento
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Caricamento in corso...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-warning">Prodotto non trovato</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid rounded shadow"
          />
        </div>
        
        <div className="col-md-6">
          <h1 className="mb-3">{product.title}</h1>
          <p className="fs-3 text-danger fw-bold mb-3">€{product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <button 
            className="btn btn-success btn-lg" 
            onClick={() => addToCart(product)}
          >
            Aggiungi al Carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;