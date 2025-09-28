import { PrismaClient } from "../generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

// Creamos una única instancia de PrismaClient.
// Si ya existe en el entorno global (por un hot-reload), la reutilizamos.
// Si no, creamos una nueva.
const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], 
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;