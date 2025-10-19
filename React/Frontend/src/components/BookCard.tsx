import React from "react";
import { LibroData as Libro } from "../types/libro.types";

type Props = {
  libro: Libro;
  showDescription?: boolean;
};

export default function BookCard({ libro, showDescription = true }: Props) {
  const author =
    (libro as any).autorNombre ??
    (libro as any).autor?.nombre ??
    (libro as any).autor ??
    (libro as any).author ??
    "";

  const cover =
    (libro as any).imagenUrl ??
    (libro as any).imagen ??
    (libro as any).portada ??
    "";

  return (
    <article className="book-card">
      {cover && (
        <img className="book-cover" src={cover} alt={libro.titulo} />
      )}
      <h3 className="book-title">{libro.titulo}</h3>
      {author && <p className="book-author">{author}</p>}
      {showDescription && libro.descripcion && (
        <p className="book-description">{libro.descripcion}</p>
      )}
    </article>
  );
}
