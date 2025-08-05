import { Router } from 'express';
import { obtenerDestacados, obtenerPorGenero } from '../controllers/libro.controller.js';

const router = Router();

router.get('/destacados', obtenerDestacados);
router.get('/:genero', obtenerPorGenero)

export default router;
