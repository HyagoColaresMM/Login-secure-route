import { Router } from 'express';
import { getSecureData } from '../controllers/api.controller';
import { authenticate } from '../middleware/auth.middleware';
import { getProfile, updateProfile } from '../controllers/user.controller';

const router = Router();

// Todas as rotas neste arquivo são protegidas pelo middleware de autenticação
router.use(authenticate);

// Rotas de API protegidas
router.get('/data', getSecureData);
router.get('/user', getProfile);
router.put('/user/update', updateProfile);

export default router;