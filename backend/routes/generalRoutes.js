import express from 'express';
const router = express.Router();
import { getUser } from '../controllers/generalController.js';

router.get('/user/:id', getUser);

export default router;
