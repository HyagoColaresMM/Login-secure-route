import { Router } from 'express';
import { login, register, getProfile } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, getProfile);

export default router;