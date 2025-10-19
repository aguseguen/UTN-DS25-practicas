export interface LibroData {
  linkTo: string;
  id: number;
  titulo: string;
  genero: string;
  autor: AutorData;
  seccion: string;
  descripcion: string;
  imagen: string;
  createdAt?: Date;
  destacado: boolean;
  updatedAt?: Date;
}

export interface AutorData {
  id: number;
  nombre: string;
  bio: string;
  foto: string;
}

export interface SeccionData {
  id: number;
  nombre: string;
}

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type UserData = {
    id: number;
    nombre: string;
    email: string;
    role: Role;
    createdAt: Date;
}
// Libro Interfaces
export interface GetLibroRequest {
  id: number;
}   
export interface GetLibroResponse {
  libro: LibroData;
  message: string;
}

export interface GetAllLibrosResponse {
  libros: LibroData[];
  total: number;
}
export interface CreateLibroRequest {
  titulo: string;
  genero: string;
  autorId: number;
  seccionId?: number;
  descripcion?: string;
  imagen?: string;
  userId: number;
}

export interface CreateLibroResponse {
  libro: LibroData;
  message: string;
}

export interface UpdateLibroRequest {
  titulo?: string;
  genero?: string;
  autorId?: number;
  seccionId?: number;
  descripcion?: string;
  imagen?: string;
}

export interface UpdateLibroResponse {
  libro: LibroData;
  message: string;
}

export interface DeleteLibroRequest {
  id: number;
}

export interface DeleteLibroResponse {
  message: string;
}

export interface GetLibrosDestacadosResponse {
  libros: LibroData[];
}

export interface GetLibrosPorGeneroResponse {
  libros: LibroData[];
}

export interface GetLibrosPorGeneroRequest {
  genero: string;
}



// Autor Interfaces
export interface CreateAutorRequest {
  nombre: string;
  bio: string;
  foto: string;
}

export interface CreateAutorResponse {
  autor: AutorData;
  message: string;
} 

export interface GetAutorRequest {
  id: number;
}

export interface GetAutorResponse {
  autor: AutorData;
  message: string;
}

export interface GetAllAutoresResponse {
  autores: AutorData[];
  total: number;
} 

export interface UpdateAutorRequest {
  id: number;
  nombre?: string;
  bio?: string;
  foto?: string;
}

export interface UpdateAutorResponse {
  autor: AutorData;
  message: string;
}

export interface DeleteAutorRequest {
  id: number;
}

export interface DeleteAutorResponse {
  message: string;
} 

// Seccion Interfaces
export interface CreateSeccionRequest {
  nombre: string;
}

export interface CreateSeccionResponse {
  seccion: SeccionData;
  message: string;
}

export interface GetSeccionRequest {
  id: number;
}

export interface GetSeccionResponse {
  seccion: SeccionData;
  message: string;
}

export interface GetAllSeccionesResponse {
  secciones: SeccionData[];
  total: number;
}

export interface UpdateSeccionRequest {
  id: number;
  nombre?: string;
} 

export interface UpdateSeccionResponse {
  seccion: SeccionData;
  message: string;
} 

export interface DeleteSeccionRequest {
  id: number;
}

export interface DeleteSeccionResponse {
  message: string;
}   


