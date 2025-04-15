const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();         // Load environment variables
connectDB();             // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());         // Allow cross-origin requests (frontend/backend)
app.use(express.json()); // Parse JSON body

// Test route
app.get('/', (req, res) => {
  res.send('API Running...');
});

// Routes
app.use('/api/exams', require('./routes/exams'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
