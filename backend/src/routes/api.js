import express from 'express';
import { getFlights, getHotels } from '../controllers/travelController.js';

const router = express.Router();

router.get('/flights', getFlights);
router.get('/hotels', getHotels);

export default router;
