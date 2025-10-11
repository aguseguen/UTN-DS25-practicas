import { z } from 'zod';

export const createAutorSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  bio: z.string().optional().default(''),
  foto: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
});

export const updateAutorSchema = createAutorSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes enviar al menos un campo para actualizar' }
);

// Tipos inferidos
export type CreateAutorInput = z.infer<typeof createAutorSchema>;
export type UpdateAutorInput = z.infer<typeof updateAutorSchema>;

