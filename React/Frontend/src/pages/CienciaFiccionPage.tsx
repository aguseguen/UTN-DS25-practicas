import { useFetch } from '../hooks/useFetch';
import BookCard from '../components/BookCard';
import { LibroData as Libro } from '../types/libro.types';

type LibrosCienciaFiccionResponse = Libro[];


function CienciaFiccionPage() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const url = `${apiUrl}/libros/genero/scifi`;
    const { data: libros, loading, error } = useFetch<LibrosCienciaFiccionResponse>(url);

    if (loading) {
        return <div className="container"><p>Cargando libros de ciencia ficcion...</p></div>;
    }
    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
    }


    return (
    <>
        <h2>Ciencia Ficcion</h2>
            <p>Cuestiona los límites de la realidad, viaja a futuros lejanos y explora las grandes ideas que definirán a la humanidad.</p>
        <div className="book-grid">
        {libros && libros.length > 0 ? (
            libros.map(libro => <BookCard key={libro.id} libro={libro} />)
    ) : (
        <p>No hay libros de ciencia ficcion disponibles.</p>
    )}
        </div>
    </>
    );
}

export default CienciaFiccionPage;