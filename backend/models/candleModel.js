const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true
});

const candleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
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
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  scentNotes: {
    type: [String],
    default: []
  },
  burnTime: {
    type: Number, // in ore
    default: 0
  },
  weight: {
    type: Number, // in grammi
    default: 0
  },
  dimensions: {
    height: { type: Number, default: 0 }, // in cm
    diameter: { type: Number, default: 0 } // in cm
  },
  isNatural: {
    type: Boolean,
    default: false
  },
  isHandmade: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
});

const Candle = mongoose.model('Candle', candleSchema);

module.exports = Candle;