import express from 'express';
import { login, trackLogin } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/login', login);
router.post('/track-login', trackLogin);

export default router;