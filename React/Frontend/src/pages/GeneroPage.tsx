import { useParams } from 'react-router-dom';
import { useFetch } from 'src/hooks/useFetch';
import BookCard from 'src/components/BookCard';
import { LibroData } from 'src/types/libro.types';
import 'src/App.css';

type LibrosPorGeneroResponse = LibroData[];

function GeneroPage() {
    // 1. Obtenemos el nombre del género directamente de la URL (ej: "psicologia", "ciencia-ficcion")
    const { genero } = useParams<{ genero: string }>();

    // 2. Construimos la URL de la API dinámicamente con ese género
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}/libros/genero/${genero}`;

    const { data: libros, loading, error } = useFetch<LibrosPorGeneroResponse>(url, {}, true);

    // Capitalizamos el género para mostrarlo como título (ej: "ciencia-ficcion" -> "Ciencia Ficcion")
    const titulo = genero
        ?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || 'Género';

    if (loading) {
        return <div className="container"><p>Cargando libros de {titulo}...</p></div>;
    }

    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
    }

    return (
        <div className="container">
            <h2>{titulo}</h2>
            <div className="book-grid">
                {libros && libros.length > 0 ? (
                    libros.map(libro => <BookCard key={libro.id} libro={libro} />)
                ) : (
                    <p>No se encontraron libros para este género.</p>
                )}
            </div>
        </div>
    );
}

export default GeneroPage;