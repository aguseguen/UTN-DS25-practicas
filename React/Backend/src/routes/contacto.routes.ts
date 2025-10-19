import { Router } from 'express';
import * as contactoController from '../controllers/contacto.controller';
import { validate } from '../middlewares/validation.middleware';
import { createMensajeContactoSchema } from '../validations/contacto.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.post(
  '/',
  validate(createMensajeContactoSchema),
  contactoController.createMensajeContacto,
);

router.get(
  '/',
  authenticate,
  authorize('ADMIN'),
  contactoController.getMensajesContacto,
);

export const contactoRoutes = router;
