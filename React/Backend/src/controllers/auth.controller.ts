import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';
import { RegisterBody } from '../types/auth.types';

export async function registerController(req: Request, res: Response, next: NextFunction) {
try {
    const { email, password, nombre, apellido, fechaNac, sexo, temaFav } = req.body as RegisterBody;
    const user = await authService.register(email, password, nombre, apellido, new Date(fechaNac), sexo, temaFav);
    return res.status(201).json({ success: true, user });
} catch (error: any) {
    // Respuesta generica (no revelo que es lo que falla, si email o contraseña)
    return res.status(400).json({ message: 'No se pudo registrar el usuario', error: (error as Error).message });
    }
}


export async function loginController(req: Request, res: Response, next: NextFunction) {
try {
    const { email, password } = req.body as { email: string; password: string };
    const result = await authService.login(email, password);
    return res.status(200).json({success: true, ...result });
} catch {
    // Respuesta generica (no revelo que es lo que falla, si email o contraseña)
    return res.status(401).json({ message: 'Email o password incorrectos' });
    }
}