import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
                role: 'USER' | 'ADMIN';
            };
        }
    }
}

//Autenticacion: Middleware para identificar usuarios
export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        // Obtener el token del encabezado Authorization
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, error: 'Token no proporcionado o formato inválido' });
        }
        const token = authHeader.split(' ')[1];
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
        //Agregar usuario al request
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        };
        next();
    } catch (error: any) {
        console.error(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, error: 'Token expirado' });
        }
        res.status(401).json({ success: false, error: 'Token inválido' });
    }
}

//Autorizacion: Middleware para verificar roles
export function authorize(...roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ success: false, error: 'No autenticado' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ success: false, error: 'No autorizado' });
        }
        next();
    };
}