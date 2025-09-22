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


// Libro Interfaces
export interface GetLibroRequest {
  id: number;
}   
export interface GetLibroResponse {
  libro: Libro;
  message: string;
}

export interface GetAllLibrosResponse {
  libros: Libro[];
  total: number;
}
export interface CreateLibroRequest {
  titulo: string;
  genero: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

export interface CreateLibroResponse {
  libro: Libro;
  message: string;
}

export interface UpdateLibroRequest {
  titulo?: string;
  genero?: string;
  autor?: string;
  descripcion?: string;
  imagen?: string;
}

export interface UpdateLibroResponse {
  libro: Libro;
  message: string;
}

export interface DeleteLibroRequest {
  id: number;
}

export interface DeleteLibroResponse {
  message: string;
}

export interface GetLibrosDestacadosResponse {
  libros: Libro[];
}

export interface GetLibrosPorGeneroResponse {
  libros: Libro[];
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
  autor: Autor;
  message: string;
} 

export interface GetAutorRequest {
  id: number;
}

export interface GetAutorResponse {
  autor: Autor;
  message: string;
}

export interface GetAllAutoresResponse {
  autores: Autor[];
  total: number;
} 

export interface UpdateAutorRequest {
  id: number;
  nombre?: string;
  bio?: string;
  foto?: string;
}

export interface UpdateAutorResponse {
  autor: Autor;
  message: string;
}

export interface DeleteAutorRequest {
  id: number;
}

export interface DeleteAutorResponse {
  message: string;
} 



