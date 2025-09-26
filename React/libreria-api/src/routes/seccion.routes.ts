import { Router } from 'express';
import * as seccionController from '../controllers/seccion.controller';
import { authenticate, authorize} from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { createSeccionSchema, updateSeccionSchema } from '../validations/seccion.validation';

const router = Router();

// Rutas para secciones
router.get('/',
    authenticate,
    authorize('ADMIN', 'USER'),
    seccionController.getAllSecciones); // Obtener todas las secciones

router.get('/:id',
    authenticate,
    authorize('ADMIN', 'USER'),
    seccionController.getSeccionById); // Obtener una sección por ID

router.post('/',
    authenticate,
    authorize('ADMIN'),
    validate(createSeccionSchema),
    seccionController.createSeccion); // Crear una nueva sección

router.put('/:id',
    authenticate,
    authorize('ADMIN'),
    validate(updateSeccionSchema),
    seccionController.updateSeccion); // Actualizar una sección por ID

router.delete('/:id',
    authenticate,
    authorize('ADMIN'),
    seccionController.deleteSeccion); // Eliminar una sección por ID

export const seccionRoutes = router;
