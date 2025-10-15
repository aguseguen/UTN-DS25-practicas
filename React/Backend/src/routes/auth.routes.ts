import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { validate } from '../middlewares/validation.middleware';
import { registerSchema, loginSchema } from '../validations/auth.validation';

const router = Router();

// Rutas Públicas
router.post('/register', validate(registerSchema), authController.registerController);
// Deshabilitamos validación en login para aislar el 400 por Zod
router.post('/login', validate(loginSchema), authController.loginController);

export const authRoutes = router;

