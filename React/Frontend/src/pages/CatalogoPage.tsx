import { useState, useEffect } from 'react';
import BookCard from 'src/components/BookCard';
import { LibroData as Libro } from 'src/types/libro.types';

const CatalogoPage = () => {
    //Estados para los libros, carga y errores
    const [libros, setLibros] = useState<Libro[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                setLoading(true);
                setError(null);

                //Obtenemos la URL base de la API desde las variables de entorno
                const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
                //Hacemos la llamada al endpoint que trae todos los libros
                const response = await fetch(`${apiBaseUrl}/libros`);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los libros.');
                }
                const data = await response.json();
                setLibros(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLibros();
    }, []);

if (loading) return <div>Cargando libros...</div>;
if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

return (
    <div className="container">
      <h1>Nuestro Catálogo Completo</h1>
      
      {libros.length > 0 ? (
        <div className="books-grid">
          {libros.map((libro) => (
            // Reutilizamos el componente BookCard
            <BookCard key={libro.id} libro={libro} /> 
          ))}
        </div>
      ) : (
        <p>No hay libros disponibles en el catálogo en este momento.</p>
      )}
    </div>
  );
};

export default CatalogoPage;
