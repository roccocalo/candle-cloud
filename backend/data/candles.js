const candles = [
  {
    name: 'Vaniglia Dolce',
    image: '/images/vanilla-candle.jpg',
    description: 'Una candela profumata alla vaniglia che crea un\'atmosfera calda e accogliente.',
    brand: 'CandleHaven',
    category: 'profumata',
    price: 19.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    scentNotes: ['vaniglia', 'caramello', 'legno di sandalo'],
    burnTime: 45,
    weight: 300,
    dimensions: {
      height: 10,
      diameter: 8
    },
    isNatural: true,
    isHandmade: true
  },
  {
    name: 'Brezza Marina',
    image: '/images/ocean-candle.jpg',
    description: 'Una candela fresca con note marine che ricorda una giornata in spiaggia.',
    brand: 'OceanScents',
    category: 'profumata',
    price: 24.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    scentNotes: ['sale marino', 'agrumi', 'muschio'],
    burnTime: 50,
    weight: 350,
    dimensions: {
      height: 12,
      diameter: 9
    },
    isNatural: true,
    isHandmade: false
  },
  {
    name: 'Candela Pilastro Rossa',
    image: '/images/red-pillar.jpg',
    description: 'Elegante candela pilastro rossa, perfetta per decorare la tavola durante le festività.',
    brand: 'DecorLux',
    category: 'pilastro',
    price: 14.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 10,
    burnTime: 60,
    weight: 400,
    dimensions: {
      height: 15,
      diameter: 7
    },
    isNatural: false,
    isHandmade: false
  },
  {
    name: 'Set Tealight Lavanda',
    image: '/images/lavender-tealight.jpg',
    description: 'Set di 6 candele tealight profumate alla lavanda per un relax immediato.',
    brand: 'RelaxCandles',
    category: 'tealight',
    price: 9.99,
    countInStock: 20,
    rating: 4.2,
    numReviews: 15,
    scentNotes: ['lavanda', 'camomilla'],
    burnTime: 4,
    weight: 20,
    dimensions: {
      height: 2,
      diameter: 4
    },
    isNatural: true,
    isHandmade: false
  },
  {
    name: 'Candela di Cera d\'Api',
    image: '/images/beeswax-candle.jpg',
    description: 'Candela naturale in pura cera d\'api, purifica l\'aria e ha un profumo naturale di miele.',
    brand: 'NaturalGlow',
    category: 'cera d\'api',
    price: 29.99,
    countInStock: 5,
    rating: 5.0,
    numReviews: 7,
    burnTime: 70,
    weight: 250,
    dimensions: {
      height: 10,
      diameter: 6
    },
    isNatural: true,
    isHandmade: true
  },
  {
    name: 'Candela Galleggiante Fiore',
    image: '/images/floating-flower.jpg',
    description: 'Set di 3 candele galleggianti a forma di fiore, ideali per decorare vasche e piscine.',
    brand: 'WaterLights',
    category: 'galleggiante',
    price: 12.99,
    countInStock: 12,
    rating: 3.9,
    numReviews: 5,
    burnTime: 3,
    weight: 30,
    dimensions: {
      height: 2,
      diameter: 8
    },
    isNatural: false,
    isHandmade: true
  }
];

module.exports = candles;