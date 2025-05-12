import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    // In un'applicazione reale, qui faresti una chiamata API
    // Per semplicità, utilizziamo dati di esempio
    const sampleProducts = [
      {
        id: 1,
        title: 'Smartphone XYZ',
        price: 499.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/300',
        description: 'Un potente smartphone con le ultime tecnologie.'
      },
      {
        id: 2,
        title: 'Laptop Pro',
        price: 999.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/300',
        description: 'Laptop professionale per lavoro e gaming.'
      },
      {
        id: 3,
        title: 'T-Shirt Premium',
        price: 29.99,
        category: 'clothing',
        image: 'https://via.placeholder.com/300',
        description: 'T-shirt di alta qualità in cotone 100%.'
      },
      {
        id: 4,
        title: 'Scarpe Sportive',
        price: 89.99,
        category: 'clothing',
        image: 'https://via.placeholder.com/300',
        description: 'Scarpe comode per attività sportive.'
      },
      {
        id: 5,
        title: 'Orologio Elegante',
        price: 199.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/300',
        description: 'Orologio elegante per ogni occasione.'
      },
      {
        id: 6,
        title: 'Borsa Designer',
        price: 149.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/300',
        description: 'Borsa di design per un look sofisticato.'
      }
    ];
    
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filtra per categoria
    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }
    
    // Filtra per termine di ricerca
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [category, searchTerm, products]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">I Nostri Prodotti</h1>
      
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Cerca prodotti..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select 
            className="form-select"
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Tutte le categorie</option>
            <option value="electronics">Elettronica</option>
            <option value="clothing">Abbigliamento</option>
            <option value="accessories">Accessori</option>
          </select>
        </div>
      </div>
      
      <div className="row justify-content-center">
        {filteredProducts.map(product => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <ProductCard 
              product={product} 
              addToCart={addToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;