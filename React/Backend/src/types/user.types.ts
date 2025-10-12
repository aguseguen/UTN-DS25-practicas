export type Role = 'USER' | 'ADMIN';

export type UserData = {
    id: number;
    nombre: string;
    apellido: string;
    fechaNac: Date;
    sexo: string;
    temaFav?: string | null;
    email: string;
    role: Role;
    createdAt: Date;
}

export type UsersListResponse = {
    users: UserData[];
    total: number;
    message: string;
}

export type UserResponse = {
    user: UserData;
    message: string;
}

export interface CreateUserRequest {
    email: string;
    password: string;
    nombre: string;
    role: Role;
}

export interface UpdateUserRequest {
    email?: string;
    password?:string;
    nombre?: string;
    role?: Role;
}
