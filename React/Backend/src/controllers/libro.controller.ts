import { Request, Response, NextFunction } from 'express';
import * as libroService from '../services/libro.service';

// GET /api/libros
export async function getAllLibros(_req: Request, res: Response, next: NextFunction) {
  try {
    const libros = await libroService.getAllLibros();
    res.json({success: true, libros, total: libros.length });
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/:id
export async function getLibroById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const libroId = parseInt(id, 10); 

    // Si el 'id' no es un número válido, pasa el control al siguiente middleware/ruta.
    if (isNaN(libroId)) {
        return next(); 
    }

    try {
        const libro = await libroService.getLibroById(libroId);
        res.status(200).json(libro);
    } catch (error) {
        next(error);
    }
}

// POST /api/libros
export async function createLibro(req: Request, res: Response, next: NextFunction) {
  try {
    // Espera: { titulo, genero, descripcion?, imagen?, autorId, userId }
    const libro = await libroService.createLibro(req.body);
    res.status(201).json({success: true, libro, message: 'Libro creado con éxito' });
  } catch (e) {
    next(e);
  }
}

// PUT /api/libros/:id
export async function updateLibro(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.updateLibro(id, req.body);
    res.json({success: true, libro, message: 'Libro actualizado con éxito' });
  } catch (e) {
    next(e);
  }
}

// DELETE /api/libros/:id
export async function deleteLibro(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await libroService.deleteLibro(id);
    res.status(204).send({ success: true, message: 'Libro eliminado con éxito' });
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/destacados
export async function getLibrosDestacados(_req: Request, res: Response, next: NextFunction) {
  try {
    const libros = await libroService.getLibrosDestacados();
    res.json(libros);
  } catch (e) {
    next(e);
  }
}

// GET /api/libros/genero/:genero
export async function getLibrosPorGenero(req: Request, res: Response, next: NextFunction) {
  try {
    const { genero } = req.params;
    const libros = await libroService.getLibrosPorGenero(genero);
    res.status(200).json(libros);
  } catch (e) {
    next(e);
  }
}
