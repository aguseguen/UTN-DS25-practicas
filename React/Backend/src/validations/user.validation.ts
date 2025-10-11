import { z } from 'zod';

// Esquema de validación para el registro de usuarios
export const createUserSchema = z.object({
    email: z.email('Email inválido')
        .toLowerCase()
        .trim(),
    password: z.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
        .regex(/[0-9]/, 'La contraseña debe contener al menos un número'),
    nombre: z.string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(50, 'El nombre no puede tener más de 50 caracteres')
        .trim(),
    role: z.enum(['USER', 'ADMIN']).optional().default('USER') // Rol opcional, por defecto será 'USER'
});

export const updateUserSchema = createUserSchema.partial(); 
