const express = require('express');
const router = express.Router();
const { getCandles, getCandleById } = require('../controllers/candleController');

// @route   GET /api/candles
// @desc    Fetch all candles
router.get('/', getCandles);

// @route   GET /api/candles/:id
// @desc    Fetch single candle
router.get('/:id', getCandleById);

module.exports = router;