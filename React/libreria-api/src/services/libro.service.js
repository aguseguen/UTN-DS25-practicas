import { libros, librosDestacados } from '../data/libros.mock.js'

export const getLibrosPorGenero = (genero) => {
    const generoNormalizado = genero.replace(/-/g, ' ');

    return libros.filter(libro => 
        libro.genero && libro.genero.toLowerCase() === generoNormalizado.toLowerCase()
    );
};

export const getLibrosDestacados = () => {
    return librosDestacados;
};

export const getTodosLosLibros = () => {
    return libros;
};