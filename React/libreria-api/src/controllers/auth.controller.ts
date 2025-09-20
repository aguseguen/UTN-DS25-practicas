import { Request, Response, NextFunction } from 'express';
import { login } from '../services/auth.service';

export async function loginController(req: Request, res: Response, next: NextFunction) {
try {
    const { email, contrasena } = req.body as { email: string; contrasena: string };
    const result = await login(email, contrasena);
    return res.status(200).json(result);
} catch {
    // Respuesta generica (no revelo que es lo que falla, si email o contraseña)
    return res.status(401).json({ message: 'Email o password incorrectos' });
    }
}