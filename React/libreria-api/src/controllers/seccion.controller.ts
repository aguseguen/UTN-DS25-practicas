import { Request, Response, NextFunction } from 'express';
import * as seccionService from '../services/seccion.service';

// GET /api/secciones
export async function getAllSecciones(_req: Request, res: Response, next: NextFunction) {
  try {
    const secciones = await seccionService.getAllSecciones();
    res.json({ success: true, secciones, total: secciones.length });
  } catch (e) {
    next(e);
  }
}

// GET /api/secciones/:id
export async function getSeccionById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const seccion = await seccionService.getSeccionById({ id });
    res.json({ success: true, seccion });
  } catch (e) {
    next(e);
  }
}

// POST /api/secciones
export async function createSeccion(req: Request, res: Response, next: NextFunction) {
  try {
    const seccion = await seccionService.createSeccion(req.body);
    res.status(201).json({ success: true, seccion, message: 'Sección creada con éxito' });
  } catch (e) {
    next(e);
  } 
}

// PUT /api/secciones/:id
export async function updateSeccion(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const seccion = await seccionService.updateSeccion({ id, ...req.body });
    res.json({ success: true, seccion, message: 'Sección actualizada con éxito' });
  } catch (e) {
    next(e);
  }
}

// DELETE /api/secciones/:id
export async function deleteSeccion(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await seccionService.deleteSeccion({ id });
    res.status(204).send({ success: true, message: 'Sección eliminada con éxito' });
  } catch (e) {
    next(e);
  }
}

