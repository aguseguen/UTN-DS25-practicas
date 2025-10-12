import { z } from 'zod';

// Esquema de validación para el registro
export const registerSchema = z.object({
  body: z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres."),
    email: z.string().email("El email no es válido."),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
    
    // Campo requerido, con el nombre correcto y esperando un string de fecha
    fechaNac: z.string().datetime('La fecha de nacimiento es requerida.'),
    
    // Campo requerido, con los valores correctos en minúscula
    sexo: z.enum(['femenino', 'masculino', 'otro'], {
        message: 'Debes seleccionar una opción para el sexo.',
    }),
    
    // Campo opcional, con el nombre correcto
    temaFav: z.string().optional(),
  }),
});
    
// Esquema de validación para el login (no cambia)
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })
});