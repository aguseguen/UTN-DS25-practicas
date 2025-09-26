import { Request, Response, NextFunction } from 'express';
import * as autorService from '../services/autor.service';

// GET /api/autores
export async function getAllAutores(_req: Request, res: Response, next: NextFunction) {
  try {
    const autores = await autorService.getAllAutores();
    res.json({ success: true, autores, total: autores.length });
  } catch (e) {
    next(e);
  }
} 

// GET /api/autores/:id
export async function getAutorById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const autor = await autorService.getAutorById({ id });
    res.json({ success: true, autor, message: 'Autor encontrado' });
  } catch (e) {
    next(e);
  }
}

// POST /api/autores
export async function createAutor(req: Request, res: Response, next: NextFunction) {
  try {
    const autor = await autorService.createAutor(req.body);
    res.status(201).json({ success: true, autor, message: 'Autor creado con éxito' });
  } catch (e) {
    next(e);
  }
}

// PUT /api/autores/:id
export async function updateAutor(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const autor = await autorService.updateAutor({ id, ...req.body });
    res.json({ success: true, autor, message: 'Autor actualizado con éxito' });
  } catch (e) {
    next(e);
  }
}

// DELETE /api/autores/:id
export async function deleteAutor(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await autorService.deleteAutor({ id });
    res.status(204).send();
  } catch (e) {
    next(e);
  }
}


