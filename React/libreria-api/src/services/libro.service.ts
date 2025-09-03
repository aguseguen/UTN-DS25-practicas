import prisma from '../config/prisma';
import { Libro, Autor } from '../generated/prisma'; // tipos que genera Prisma

const mapLibro = (r: any): Libro & { autor: string } => ({
  id: r.id,
  titulo: r.titulo,
  genero: r.genero,
  autor: r.autor?.nombre ?? '(sin autor)',
  descripcion: r.descripcion ?? '',
  imagen: r.imagen ?? '',
  userId: r.userId,
  autorId: r.autorId,
  createdAt: r.createdAt,
});

export async function getAllLibros(): Promise<(Libro & { autor: string })[]> {
  const rows = await prisma.libro.findMany({
    include: { autor: true },
    orderBy: { id: 'asc' },
  });
  return rows.map(mapLibro);
}

export async function getLibroById(id: number): Promise<Libro & { autor: string }> {
  const row = await prisma.libro.findUnique({
    where: { id },
    include: { autor: true },
  });
  if (!row) {
    const error = new Error('Libro no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  return mapLibro(row);
}

export async function createLibro(data: {
  titulo: string;
  genero: string;
  descripcion?: string;
  imagen?: string;
  autorId: number;
  userId: number;
}): Promise<Libro & { autor: string }> {
  // Verificar que el autor existe
  const autorExists = await prisma.autor.findUnique({ where: { id: data.autorId } });
  if (!autorExists) {
    const error = new Error('El autor no existe') as any;
    error.statusCode = 404;
    throw error;
  }

  const row = await prisma.libro.create({
    data,
    include: { autor: true },
  });
  return mapLibro(row);
}

export async function updateLibro(
  id: number,
  data: Partial<Libro> & { autorId?: number }
): Promise<Libro & { autor: string }> {
  if (data.autorId) {
    const autorExists = await prisma.autor.findUnique({ where: { id: data.autorId } });
    if (!autorExists) {
      const error = new Error('El autor no existe') as any;
      error.statusCode = 404;
      throw error;
    }
  }

  try {
    const row = await prisma.libro.update({
      where: { id },
      data,
      include: { autor: true },
    });
    return mapLibro(row);
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export async function deleteLibro(id: number): Promise<void> {
  try {
    await prisma.libro.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export async function getLibrosPorGenero(generoParam: string) {
  const genero = generoParam.replace(/-/g, ' ');
  const rows = await prisma.libro.findMany({
    where: { genero: { equals: genero, mode: 'insensitive' } },
    include: { autor: true },
    orderBy: { id: 'asc' },
  });
  return rows.map(mapLibro);
}

export async function getLibrosDestacados() {
  const rows = await prisma.libro.findMany({
    include: { autor: true },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });
  return rows.map(mapLibro);
}
