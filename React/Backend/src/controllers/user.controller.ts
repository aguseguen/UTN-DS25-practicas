import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { CreateUserRequest, UpdateUserRequest } from '../types/user.types';

// Obtener todos los usuarios
export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await userService.getAllUsers();
        res.json({result, total: result.length, message: "Usuarios obtenidos exitosamente" });
    } catch (error) {
        next(error);
    }
}

// Obtener usuario por ID
export async function getUserById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        // Obtener el ID de la URL y convertirlo a número
        const id = parseInt(req.params.id);
        const result = await userService.getUserById(id);
        res.json({user: result, message: "Usuario obtenido exitosamente" });
    } catch (error) {
        next(error);
    }
}

// Crear usuario
export async function createUser(req: Request<{}, {}, CreateUserRequest>, res: Response, next: NextFunction) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({user, message: "Usuario creado exitosamente" });
    } catch (error) {
        next(error);
    }
}

// Actualizar usuario por ID    
export async function updateUser(req: Request<{id: string}, {}, UpdateUserRequest>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const result = await userService.updateUser(parseInt(id), req.body);
        res.json({user: result, message: "Usuario actualizado exitosamente" });
    } catch (error) {
        if (error instanceof Error && (error as any).code === 'P2025') {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        next(error);
    }
}

// Eliminar usuario por ID
export async function deleteUser(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id);
        await userService.deleteUser(id);
        res.json({ success: true, message: "Usuario eliminado exitosamente" });
    } catch (error) {
        if (error instanceof Error && (error as any).code === 'P2025') {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        next(error);
    }
    }

export const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // El middleware de autenticación ya verificó el token y añadió 'req.user'
    // TypeScript puede que no lo sepa, así que lo "forzamos" un poco.
    const userId = (req as any).user.id; 
    const userProfile = await userService.getUserProfileById(userId);
    res.json(userProfile);
  } catch (error) {
    next(error);
  }
};