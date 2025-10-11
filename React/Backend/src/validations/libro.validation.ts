import { z } from 'zod';

export const GeneroEnum = z.enum(['Psicologia', 'Romance Juvenil', 'Fantasia', 'Ciencia Ficcion']);

export const createLibroSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  genero: z.union([GeneroEnum, z.string().min(1)]),
  descripcion: z.string().optional().default(''),
  imagen: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
  autorId: z.coerce.number().int().positive('autorId debe ser un entero positivo'),
  userId: z.coerce.number().int().positive('userId debe ser un entero positivo'),
});

export const updateLibroSchema = createLibroSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes enviar al menos un campo para actualizar' }
);

// Tipos inferidos
export type CreateLibroInput = z.infer<typeof createLibroSchema>;
export type UpdateLibroInput = z.infer<typeof updateLibroSchema>;
