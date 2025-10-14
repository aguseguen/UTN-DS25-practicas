import  prisma  from '../config/prisma';
import type { Seccion as PrismaSeccion } from '@prisma/client';
import type { CreateSeccionRequest, UpdateSeccionRequest, GetSeccionRequest, DeleteSeccionRequest, SeccionData } from '../types/libro.types';

const toSeccion = (s: PrismaSeccion): SeccionData => ({
  id: s.id,
  nombre: s.nombre,
}); 

// Obtener todas las secciones
export async function getAllSecciones(limit: number = 10): Promise<SeccionData[]> {
  const secciones = await prisma.seccion.findMany({
    orderBy: { id: 'asc' },
    take: limit,
  });
  return secciones.map(toSeccion);
}

// obtener seccion por id
export async function getSeccionById(req: GetSeccionRequest): Promise<SeccionData> {
  const seccion = await prisma.seccion.findUnique({
    where: { id: req.id },
  });
  if (!seccion) {
    const error = new Error('Seccion no encontrada') as any;
    error.statusCode = 404;
    throw error;
  }
  return toSeccion(seccion);
}

// crear seccion
export async function createSeccion(req: CreateSeccionRequest): Promise<SeccionData> {
  const nuevaSeccion = await prisma.seccion.create({
    data: {
      nombre: (req.nombre).trim(),
    },
  });
  return toSeccion(nuevaSeccion);
}

// actualizar seccion
export async function updateSeccion(req: UpdateSeccionRequest): Promise<SeccionData> {
  // 1. Verificar si existe la seccion
  const seccion = await prisma.seccion.findUnique({
    where: { id: req.id },
  });
  if (!seccion) {
    const error = new Error('Seccion no encontrada') as any;
    error.statusCode = 404;
    throw error;
  }

  // 2. Actualizar la seccion
  const seccionActualizada = await prisma.seccion.update({
    where: { id: req.id },
    data: {
      nombre: (req.nombre) ? req.nombre.trim() : undefined,
    },
  });
  return toSeccion(seccionActualizada);
}

// eliminar seccion
export async function deleteSeccion(req: DeleteSeccionRequest): Promise<void> {
  // 1. Verificar si existe la seccion
  const seccion = await prisma.seccion.findUnique({
    where: { id: req.id },
  });
  if (!seccion) {
    const error = new Error('Seccion no encontrada') as any;
    error.statusCode = 404;
    throw error;
  }

  // 2. Eliminar la seccion
  await prisma.seccion.delete({
    where: { id: req.id },
  });
}
