const mongoose = require('mongoose');



const candleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['profumata', 'decorativa', 'votiva', 'tealight', 'galleggiante', 'pilastro', 'cera di soia', 'cera d\'api']
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  burnTime: {
    type: Number, // in ore
    default: 0
  }
}, {
  timestamps: true,
});

const Candle = mongoose.model('Candela', candleSchema);

module.exports = Candle;