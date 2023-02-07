import express from 'express';
import { getProducts, getCustomers, getTransactions, getGeogrophy } from '../controllers/clientController.js';
const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
router.get('/geography', getGeogrophy);

export default router;
