import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';


export async function login(email: string, password: string) {
    // 1) Buscar usuario por email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    // No revelamos si el email existe
    throw new Error('Credenciales inválidas');
  }

  // 2. Comparar contraseñas
  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Credenciales invalidas');
  }

  // 3. Generar Token
    const JWT_SECRET = process.env.JWT_SECRET as Secret | undefined;
  if (!JWT_SECRET) {
    throw new Error('Falta JWT_SECRET en .env');
  }
  const EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '2h';
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(
    payload,
    JWT_SECRET,
    {
      expiresIn: EXPIRES_IN,
    } as SignOptions,
  );

  return { token };
};
