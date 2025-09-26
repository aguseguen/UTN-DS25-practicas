import { z } from 'zod';

export const createSeccionSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
});

export const updateSeccionSchema = createSeccionSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { message: 'Debes enviar al menos un campo para actualizar' }
);

// Tipos inferidos
export type CreateSeccionInput = z.infer<typeof createSeccionSchema>;
export type UpdateSeccionInput = z.infer<typeof updateSeccionSchema>;

