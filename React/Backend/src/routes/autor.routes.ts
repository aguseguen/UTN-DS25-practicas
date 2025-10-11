import { Router } from 'express';
import * as autorController from '../controllers/autor.controller';
import { authenticate, authorize} from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { createAutorSchema, updateAutorSchema } from '../validations/autor.validation';

const router = Router();

// Rutas para autores
router.get('/',
    authenticate,
    authorize('ADMIN', 'USER'),
    autorController.getAllAutores); // Obtener todos los autores

router.get('/:id',
    authenticate,
    authorize('ADMIN', 'USER'),
    autorController.getAutorById); // Obtener un autor por ID

router.post('/',
    authenticate,
    authorize('ADMIN'),
    validate(createAutorSchema),
    autorController.createAutor); // Crear un nuevo autor

router.put('/:id',
    authenticate,
    authorize('ADMIN'),
    validate(updateAutorSchema),
    autorController.updateAutor); // Actualizar un autor por ID

router.delete('/:id',
    authenticate,
    authorize('ADMIN'),
    autorController.deleteAutor); // Eliminar un autor por ID

export const autorRoutes = router;
