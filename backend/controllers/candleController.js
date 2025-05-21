const Candle = require('../models/candleModel');

// @desc    Fetch all candles
// @route   GET /api/candles
// @access  Public
const getCandles = async (req, res) => {
  try {
    const candles = await Candle.find({});
    res.json(candles);
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recupero delle candele' });
  }
};

// @desc    Fetch single candle
// @route   GET /api/candles/:id
// @access  Public
const getCandleById = async (req, res) => {
  try {
    const candle = await Candle.findById(req.params.id);
    
    if (candle) {
      res.json(candle);
    } else {
      res.status(404).json({ message: 'Candela non trovata' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recupero della candela' });
  }
};

module.exports = { getCandles, getCandleById };