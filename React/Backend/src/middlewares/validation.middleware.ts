import { ZodError, ZodTypeAny } from 'zod';
import { Request, Response, NextFunction } from 'express'; 

// Validador tolerante a esquemas con y sin wrapper "body".
export const validate = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 1) Intentar validar el cuerpo plano
      const result = await schema.safeParseAsync(req.body);
      if (result.success) {
        req.body = result.data;
        return next();
      }

      // 2) Si falla, intentar con wrapper { body: req.body } para retrocompatibilidad
      const wrapped = await schema.safeParseAsync({ body: req.body });
      if (wrapped.success) {
        // Si el esquema espera { body: {...} }, dejamos en req.body el payload interno
        const data: any = wrapped.data;
        req.body = data?.body ?? data;
        return next();
      }

      // 3) Reportar errores
      const err = wrapped.success ? result.error : wrapped.error;
      return res.status(400).json({
        success: false,
        message: 'Datos invalidos',
        errors: err.issues.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Datos invalidos',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return next(error);
    }
  };
};
