import { Request, Response, NextFunction } from 'express';
import * as libroService from '../services/libro.service';

// GET /api/libros
export async function obtenerTodos(_req: Request, res: Response, next: NextFunction) {
  try {
    const libros = await libroService.getAllLibros();
    res.json(libros);
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/:id
export async function obtenerPorId(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.getLibroById(id);
    res.json(libro);
  } catch (e) {
    next(e);
  }
}

// POST /api/libros
export async function crear(req: Request, res: Response, next: NextFunction) {
  try {
    // Espera: { titulo, genero, descripcion?, imagen?, autorId, userId }
    const libro = await libroService.createLibro(req.body);
    res.status(201).json(libro);
  } catch (e) {
    next(e);
  }
}

// PUT /api/libros/:id
export async function actualizar(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.updateLibro(id, req.body);
    res.json(libro);
  } catch (e) {
    next(e);
  }
}

// DELETE /api/libros/:id
export async function eliminar(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await libroService.deleteLibro(id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/destacados
export async function obtenerDestacados(_req: Request, res: Response, next: NextFunction) {
  try {
    const libros = await libroService.getLibrosDestacados();
    res.json(libros);
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/genero/:genero
export async function obtenerPorGenero(req: Request, res: Response, next: NextFunction) {
  try {
    const { genero } = req.params;
    const libros = await libroService.getLibrosPorGenero(genero);
    res.json(libros);
  } catch (e) {
    next(e);
  }
}
