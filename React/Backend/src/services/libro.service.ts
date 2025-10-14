import prisma from '../config/prisma';
import type { Libro as PrismaLibro, Autor, Seccion } from "@prisma/client";
import type { LibroData, CreateLibroRequest, UpdateLibroRequest, GetLibrosPorGeneroRequest } from '../types/libro.types';

const toLibro = (l: PrismaLibro & { autor: Autor, seccion: Seccion | null }): LibroData => ({
    id: l.id,
    titulo: l.titulo, 
    genero: l.genero,
    descripcion: l.descripcion ?? '',
    imagen: l.imagen ?? '',
    autor: l.autor.nombre,
    destacado: l.destacado,
    seccion: l.seccion?.nombre ?? 'Sin seccion',
    createdAt: l.createdAt,
});

// obtener todos los libros
export async function getAllLibros(limit: number = 10): Promise<LibroData[]> {
  const libros = await prisma.libro.findMany({
  orderBy: { id: 'asc' },
  take: limit,
  include: { autor: true , seccion: true },
  });
  return libros.map(toLibro);
}

// obtener libro por id 
export async function getLibroById(id: number): Promise<LibroData> {
  const libro = await prisma.libro.findUniqueOrThrow({
    where: { id : id },
    include: { autor: true, seccion: true },
  });

  return toLibro(libro);
}

// crear libro
export async function createLibro(req: CreateLibroRequest): Promise<LibroData> {
  // 1. Verificar si existe el autor
  const autor = await prisma.autor.findUnique({ where: { id: req.autorId }});
  if (!autor) {
    const error = new Error('Autor no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Crear libro
  const nuevoLibro = await prisma.libro.create({
    data: {
      titulo: (req.titulo).trim(),
      genero: (req.genero).trim(),
      descripcion: req.descripcion?.trim() ?? '',
      imagen: req.imagen?.trim() ?? '',
      autor: { connect: { id: req.autorId } },
      seccion: req.seccionId ? { connect: { id: req.seccionId } } : undefined,
      user: { connect: { id: req.userId } },
    },
    include: {
      autor: true,
      seccion: true,
    },
  });
  return toLibro(nuevoLibro);
}

// Actualizar libro
export async function updateLibro(id: number, req: UpdateLibroRequest): Promise<LibroData> {
  // 1. Verificar si existe el libro
  const libro = await prisma.libro.findUnique({ where: { id }});
  if (!libro) {
    const error = new Error('Libro no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Actualizar libro      
  const updatedLibro = await prisma.libro.update({
    where: { id },
    data: {
      titulo: req.titulo?.trim() ?? libro.titulo,
      genero: req.genero?.trim() ?? libro.genero,
      descripcion: req.descripcion?.trim() ?? libro.descripcion,
      imagen: req.imagen?.trim() ?? libro.imagen,
      autor: req.autorId ? { connect: { id: req.autorId } } : undefined,
      seccion: req.seccionId ? { connect: { id: req.seccionId } } : undefined,    
    },
    include: {
      autor: true,
      seccion: true,
    },
  });
  return toLibro(updatedLibro);
}

// Eliminar libro
export async function deleteLibro(id: number): Promise<void> {  
  // 1. Verificar si existe el libro
  const libro = await prisma.libro.findUnique({ where: { id }});
  if (!libro) {
    const error = new Error('Libro no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Eliminar libro
  await prisma.libro.delete({ where: { id }});
} 

// obtener libros destacados (un libro por genero)
export async function getLibrosDestacados(): Promise<LibroData[]> {
  const libros = await prisma.libro.findMany({
    where: { destacado: true },
    include: { autor: true, seccion: true },
  });
  return libros.map(toLibro);
}

// obtener libros por genero
export async function getLibrosPorGenero(genero: string): Promise<LibroData[]> {
    const libros = await prisma.libro.findMany({
        where: {
                genero: {
                    equals: genero,
                    mode: 'insensitive',
                }
        },
        include: {
            autor: true,
            seccion: true,
        }
    });
    return libros.map(toLibro);
}

