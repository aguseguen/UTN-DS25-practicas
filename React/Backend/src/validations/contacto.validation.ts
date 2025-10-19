import { z } from 'zod';

export const createMensajeContactoSchema = z.object({
  nombre: z
    .string({
      required_error: 'El nombre es obligatorio.',
      invalid_type_error: 'El nombre debe ser un texto.',
    })
    .trim()
    .min(1, 'El nombre es obligatorio.')
    .max(100, 'El nombre no puede superar los 100 caracteres.'),
  email: z
    .string({
      required_error: 'El email es obligatorio.',
      invalid_type_error: 'El email debe ser un texto.',
    })
    .trim()
    .toLowerCase()
    .email('Debes ingresar un email valido.')
    .max(150, 'El email no puede superar los 150 caracteres.'),
  asunto: z
    .string({
      required_error: 'El asunto es obligatorio.',
      invalid_type_error: 'El asunto debe ser un texto.',
    })
    .trim()
    .min(3, 'El asunto debe tener al menos 3 caracteres.')
    .max(150, 'El asunto no puede superar los 150 caracteres.'),
  mensaje: z
    .string({
      required_error: 'El mensaje es obligatorio.',
      invalid_type_error: 'El mensaje debe ser un texto.',
    })
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(1000, 'El mensaje no puede superar los 1000 caracteres.'),
});
