const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

// Tutte le route del carrello richiedono autenticazione
router.use(protect);

router.route('/')
  .get(getCart)
  .post(addToCart);

// Modifica qui: cambia l'ordine delle route per evitare conflitti
router.delete('/clear', clearCart);  // Questa deve venire prima
router.delete('/:productId', removeFromCart);

module.exports = router;