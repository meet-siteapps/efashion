const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect(
  'mongodb+srv://Fash123:Fash123@mensfashion.8f2sv8r.mongodb.net/mensfashion'
)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/products', require('./routes/productRoutes'));

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'Clothing Store API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
