import prisma from '../config/prisma';
import { User as PrismaUser } from "../generated/prisma";
import bcrypt from 'bcrypt';
import type { Role, CreateUserRequest, UpdateUserRequest, UserData } from '../types/user.types';

const toUser = (u: PrismaUser): UserData => ({
    id: u.id,
    nombre: u.nombre,
    apellido: u.apellido,
    fechaNac: u.fechaNac,
    sexo: u.sexo,
    temaFav: u.temaFav ?? undefined,
    email: u.email,
    role: u.role as unknown as Role,
    createdAt: u.createdAt,
});

// obtener todos los usuarios

export async function getAllUsers(limit: number = 10): Promise<UserData[]> {
  const users = await prisma.user.findMany({
  orderBy: { id: 'asc' },
  take: limit,
  omit: { password: true },
  });
  return users;
}

// obtener usuario por id
export async function getUserById(id: number): Promise<UserData> {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: { password: true },
  }); 
  if (!user) {
    const error = new Error('Usuario no encontrado') as any;  
    (error as any).statusCode = 404;
    throw error;
  }     
  return user;
} 

// crear usuario
export async function createUser(req: CreateUserRequest): Promise<UserData> {
  // 1. Verificar si existe 
  const exists = await prisma.user.findUnique({ where: { email: req.email }});
  if (exists) { 
    const error = new Error('Email ya registrado') as any;
    error.statusCode = 409;
    throw error;
  }
  // 2. Hashear password  
  const hashedPassword = await bcrypt.hash(req.password, 10);

  // 3. Crear usuario
  const created = await prisma.user.create({
    data: {
      nombre: (req.nombre).trim(),
      password: hashedPassword,
      role: req.role as unknown as Role,
      email: (req.email).toLowerCase().trim(),
      apellido: '',
      fechaNac: new Date(),
      sexo: '',
      temaFav: '',
    },
  });
  return toUser(created);
}

// actualizar usuario
export async function updateUser(id: number, req: UpdateUserRequest): Promise<UserData> {
  // 1. Verificar si existe
  const user = await prisma.user.findUnique({ where: { id }});
  if (!user) {
    const error = new Error('Usuario no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Actualizar usuario
  try {
  const updatedData: Partial<PrismaUser> = { ...req };
  if (req.password) {
    updatedData.password = await bcrypt.hash(req.password, 10);
  } else {
    delete (updatedData as any).password;
  }
  updatedData.email = (req.email)?.toLowerCase().trim();    
  updatedData.nombre = (req.nombre)?.trim();
  const updated = await prisma.user.update({
    where: { id },
    data: updatedData,
    omit: { password: true },
  });
  return updated;
} catch (e: any ) {
  if (e.code === 'P2025') {
    const error = new Error('Usuario no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  const error = new Error('Error al actualizar el usuario') as any;
  error.statusCode = 500;
  throw error;
}}

// eliminar usuario
export async function deleteUser(id: number): Promise<UserData> {
  // 1. Verificar si existe
  const user = await prisma.user.findUnique({ where: { id }});
  if (!user) {
    const error = new Error('Usuario no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  // 2. Eliminar usuario
  try {
    const deleted = await prisma.user.delete({ where: { id }});
    return deleted;
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Usuario no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export const getUserProfileById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error('Usuario no encontrado.');
  }

  // ¡Fundamental! Nunca devolver la contraseña.
  const { password, ...userProfile } = user;
  return userProfile;
};