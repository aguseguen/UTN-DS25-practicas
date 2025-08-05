import { getLibrosPorGenero, getLibrosDestacados } from "../services/libro.service.js";

export const obtenerDestacados = (req, res) => {
    const libros = getLibrosDestacados();
    res.json(libros);
}

export const obtenerPorGenero = (req, res) => {
    const { genero } = req.params;
    const libros = getLibrosPorGenero(genero);
    res.json(libros);
}