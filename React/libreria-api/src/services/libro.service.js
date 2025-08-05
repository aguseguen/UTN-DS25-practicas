import { libros, librosDestacados } from '../data/libros.mock.js'

export const getLibrosPorGenero = (genero) => {
    return libros.filter(libros.genero.toLowerCase() === genero.toLowerCase());
};

export const getLibrosDestacados = () => {
    return librosDestacados;
};