import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar, obtenerDestacados, obtenerPorGenero } from '../controllers/libro.controller';
import { validate } from '../../middlewares/validation.middleware';
import { createLibroSchema, updateLibroSchema } from '../../validations/libro.validation';

const router = Router();

router.get('/', obtenerTodos);
router.get('/destacados', obtenerDestacados);
router.get('/genero/:genero', obtenerPorGenero);
router.get('/:id', obtenerPorId);

router.post('/', validate(createLibroSchema), crear);
router.put('/:id', validate(updateLibroSchema), actualizar);

router.delete('/:id', eliminar);

export default router;
