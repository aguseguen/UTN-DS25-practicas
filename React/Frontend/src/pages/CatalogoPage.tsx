import { useEffect, useState } from "react";
import BookCard from "src/components/BookCard";
import { LibroData as Libro } from "src/types/libro.types";

const CatalogoPage = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiBaseUrl =
          import.meta.env.VITE_API_URL || "http://localhost:3000/api";
        const response = await fetch(`${apiBaseUrl}/libros`);
        const data = await response.json();

        if (
          data &&
          typeof data === "object" &&
          Array.isArray((data as { libros?: Libro[] }).libros)
        ) {
          setLibros(data.libros);
        } else {
          console.error(
            'Error: la API no devolvio un objeto con un array de libros en la propiedad "libros".'
          );
          setError("La respuesta de la API no tuvo el formato esperado.");
          setLibros([]);
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Error inesperado al cargar.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  if (loading) return <div>Cargando libros...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div className="container">
      <h1>Nuestro Catalogo Completo</h1>

      {libros.length > 0 ? (
        <div className="book-grid">
          {libros.map((libro) => (
            <BookCard
              key={libro.id ?? libro.titulo}
              libro={libro}
              showDescription
            />
          ))}
        </div>
      ) : (
        <p>No hay libros disponibles en el catalogo en este momento.</p>
      )}
    </div>
  );
};

export default CatalogoPage;
