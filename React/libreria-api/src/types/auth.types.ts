export type Role = 'USER' | 'ADMIN';

export interface LoginRequest {
    email: string;
    password: string;
}   

export interface AuthUser {
    id: number;
    email: string;
    username: string;
    role: Role;
    createdAt: Date;
}

export interface LoginResponse {
    user: AuthUser;
    token: string;
}