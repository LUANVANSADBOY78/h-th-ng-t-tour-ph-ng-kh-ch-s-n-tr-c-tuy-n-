import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/traveloka_db';
const DIST_DIR = path.resolve(path.dirname(fileURLToPath(
    import.meta.url)), '../../dist');

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Đã kết nối MongoDB thành công!'))
    .catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err.message));

// Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    res.status(200).json({ status: 'ok', database: dbStatus });
});

app.use(express.static(DIST_DIR));
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path === '/health') return next();
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server đang chạy tại port ${PORT}`);
});