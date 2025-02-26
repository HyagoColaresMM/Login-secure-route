import { Router } from 'express';
import { getSecureData } from '../controllers/api.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Todas as rotas neste arquivo são protegidas pelo middleware de autenticação
router.use(authenticate);

// Rotas de API protegidas
router.get('/data', getSecureData);

export default router;