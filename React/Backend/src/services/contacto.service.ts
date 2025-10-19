import prisma from '../config/prisma';
import type { MensajeContacto } from '@prisma/client';
import type {
  CreateMensajeContactoRequest,
  MensajeContactoData,
} from '../types/contacto.types';

const toMensajeContacto = (mensaje: MensajeContacto): MensajeContactoData => ({
  id: mensaje.id,
  nombre: mensaje.nombre,
  email: mensaje.email,
  asunto: mensaje.asunto,
  mensaje: mensaje.mensaje,
  createdAt: mensaje.createdAt,
});

export async function createMensajeContacto(
  input: CreateMensajeContactoRequest,
): Promise<MensajeContactoData> {
  const mensaje = await prisma.mensajeContacto.create({
    data: {
      nombre: input.nombre.trim(),
      email: input.email.trim(),
      asunto: input.asunto.trim(),
      mensaje: input.mensaje.trim(),
    },
  });

  return toMensajeContacto(mensaje);
}

export async function getMensajesContacto(): Promise<MensajeContactoData[]> {
  const mensajes = await prisma.mensajeContacto.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return mensajes.map(toMensajeContacto);
}
