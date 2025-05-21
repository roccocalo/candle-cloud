const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars - make sure this points to the correct .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const cors = require('cors');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const candleRoutes = require('./routes/candleRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/candles', candleRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API funzionante' });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});