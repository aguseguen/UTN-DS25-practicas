import { z } from 'zod';

// Esquema de validación para el login
// El email debe ser un string con formato de email y la contraseña un string
// de al menos 6 caracteres
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

