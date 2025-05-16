const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  candles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candle'
  }],
  isLimited: {
    type: Boolean,
    default: false
  },
  discountPercentage: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  season: {
    type: String,
    enum: ['primavera', 'estate', 'autunno', 'inverno', 'tutto l\'anno'],
    default: 'tutto l\'anno'
  }
}, {
  timestamps: true
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;