import { Router } from 'express';
import * as libroController from '../controllers/libro.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { createLibroSchema, updateLibroSchema } from '../validations/libro.validation';

const router = Router();

router.get(
    '/',
    libroController.getAllLibros);
router.get(
    '/destacados',
    authenticate,
    authorize('ADMIN', 'USER'),
    libroController.getLibrosDestacados);
router.get(
    '/genero/:genero',
    authenticate,
    authorize('ADMIN', 'USER'),
    libroController.getLibrosPorGenero);
router.get(
    '/:id',
    authenticate,
    authorize('ADMIN', 'USER'),
    libroController.getLibroById);
router.post(
    '/',
    authenticate,
    authorize('ADMIN'),
    validate(createLibroSchema),
    libroController.createLibro);
router.put(
    '/:id',
    authenticate,
    authorize('ADMIN'),
    validate(updateLibroSchema),
    libroController.updateLibro);
router.delete('/:id',
    authenticate,
    authorize('ADMIN'),
    libroController.deleteLibro);

export const libroRoutes = router;
