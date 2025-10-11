import prisma from '../config/prisma';
import { Autor as PrismaAutor } from '../generated/prisma';
import type { CreateAutorRequest, UpdateAutorRequest, GetAutorRequest, DeleteAutorRequest, CreateSeccionRequest, AutorData } from '../types/libro.types';


const toAutor = (a: PrismaAutor): AutorData => ({
  id: a.id,
  nombre: a.nombre,
  bio: a.bio ?? '',
  foto: a.foto ?? '',
});

// Obtener todos los autores
export async function getAllAutores(limit: number = 10): Promise<AutorData[]> {
  const autores = await prisma.autor.findMany({
    orderBy: { id: 'asc' },
    take: limit,
  });
  return autores.map(toAutor);
} 

// obtener autor por id
export async function getAutorById(req: GetAutorRequest): Promise<AutorData> {
  const autor = await prisma.autor.findUnique({
    where: { id: req.id },
  });
  if (!autor) { 
    const error = new Error('Autor no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  return toAutor(autor);
} 

// crear autor
export async function createAutor(req: CreateAutorRequest): Promise<AutorData> {
  const nuevoAutor = await prisma.autor.create({
    data: {
      nombre: (req.nombre).trim(),
      bio: req.bio?.trim() ?? '',
      foto: req.foto?.trim() ?? '',
    },
  });
  return toAutor(nuevoAutor);
}

// actualizar autor
export async function updateAutor(req: UpdateAutorRequest): Promise<AutorData> {
  // 1. Verificar si existe el autor 
  const autor = await prisma.autor.findUnique({ where: { id: req.id }});
  if (!autor) {
    const error = new Error('Autor no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Actualizar autor
  const autorActualizado = await prisma.autor.update({
    where: { id: req.id },
    data: {
      nombre: req.nombre ? req.nombre.trim() : undefined,
      bio: req.bio ? req.bio.trim() : undefined,
      foto: req.foto ? req.foto.trim() : undefined,
    },
  });
  return toAutor(autorActualizado);
}

// eliminar autor
export async function deleteAutor(req: DeleteAutorRequest): Promise<void> {
  const autor = await prisma.autor.findUnique({ where: { id: req.id } });
  if (!autor) {
    const error = new Error('Autor no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  await prisma.autor.delete({ where: { id: req.id } });
}

