import express from 'express';
import { createUser, getLoginDetails } from '../controllers/userControllers.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-user', createUser);
router.get('/login-details', authenticateAdmin, getLoginDetails);

export default router;