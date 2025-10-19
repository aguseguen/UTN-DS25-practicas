import { Request, Response, NextFunction } from 'express';
import * as contactoService from '../services/contacto.service';

export async function createMensajeContacto(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const mensaje = await contactoService.createMensajeContacto(req.body);
    res.status(201).json({
      success: true,
      message: 'Mensaje recibido con exito.',
      data: mensaje,
    });
  } catch (error) {
    next(error);
  }
}

export async function getMensajesContacto(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const mensajes = await contactoService.getMensajesContacto();
    res.status(200).json({
      success: true,
      mensajes,
      total: mensajes.length,
    });
  } catch (error) {
    next(error);
  }
}
