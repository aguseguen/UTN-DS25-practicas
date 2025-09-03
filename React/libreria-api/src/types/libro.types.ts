export interface Libro {
  id: number;
  titulo: string;
  genero: string;
  autor: string;
  descripcion: string;
  imagen: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Autor {
  id: number;
  nombre: string;
  bio: string;
  foto: string;
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  contrasena: string;
  foto: string;
}

export interface ObtenerLibroRequest {
  id: number;
}   

export interface CrearLibroRequest {
  titulo: string;
  genero: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

export interface CrearLibroResponse {
  libro: Libro;
  message: string;
}

export interface ActualizarLibroRequest {
  titulo?: string;
  genero?: string;
  autor?: string;
  descripcion?: string;
  imagen?: string;
}

export interface ActualizarLibroResponse {
  libro: Libro;
  message: string;
}

export interface EliminarLibroRequest {
  id: number;
}

export interface EliminarLibroResponse {
  message: string;
}

export interface ObtenerLibroResponse {
  libro: Libro;
  message: string;
}

export interface ObtenerLibrosResponse {
  libros: Libro[];
  total: number;
}

export interface CrearAutorRequest {
  nombre: string;
  bio: string;
  foto: string;
}

export interface CrearAutorResponse {
  autor: Autor;
  message: string;
} 

export interface ObtenerAutorRequest {
  id: number;
}

export interface ObtenerAutorResponse {
  autor: Autor;
  message: string;
}

export interface ObtenerAutoresResponse {
  autores: Autor[];
  total: number;
} 

export interface ActualizarAutorRequest {
  id: number;
  nombre?: string;
  bio?: string;
  foto?: string;
}

export interface ActualizarAutorResponse {
  autor: Autor;
  message: string;
}

export interface EliminarAutorRequest {
  id: number;
}

export interface EliminarAutorResponse {
  message: string;
} 

export interface CrearUsuarioRequest {
  nombre: string;
  email: string;
  contrasena: string;
  foto: string;
}

export interface CrearUsuarioResponse {
  usuario: User;
  message: string;
}

export interface ObtenerUsuarioRequest {
  id: number;
}

export interface ObtenerUsuarioResponse {
  usuario: User;
  message: string;
}

export interface ObtenerUsuariosResponse {
  usuarios: User[];
  total: number;
}

export interface ActualizarUsuarioRequest {
  id: number;
  nombre?: string;
  email?: string;
  contrasena?: string;
  foto?: string;
}

export interface ActualizarUsuarioResponse {
  usuario: User;
  message: string;
}

export interface EliminarUsuarioRequest {
  id: number;
}

export interface EliminarUsuarioResponse {
  message: string;
} 


