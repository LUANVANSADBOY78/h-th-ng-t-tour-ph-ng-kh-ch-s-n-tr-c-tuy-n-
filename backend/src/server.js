import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Health check endpoint cho Docker Compose
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running correctly.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on port ${PORT}`);
});
