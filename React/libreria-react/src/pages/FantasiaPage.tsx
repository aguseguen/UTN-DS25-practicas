import { useFetch } from '../hooks/useFetch';
import BookCard from '../components/BookCard';
import { LibroData as Libro} from '../types/libro.types';

type LibrosFantasiaResponse = Libro[];


function FantasiaPage() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const url = `${apiUrl}/libros/genero/fantasia`;
    const { data: libros, loading, error } = useFetch<LibrosFantasiaResponse>(url, {}, true);

    if (loading) {
        return <div className="container"><p>Cargando libros de fantasía...</p></div>;
    }

    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
    }

    return (
    <>
        <h2>Fantasía</h2>
            <p>Viaja a mundos imposibles, donde la magia es real y la aventura te espera en cada página.</p>
        <div className="book-grid">
        {libros && libros.length > 0 ? (
            libros.map(libro => (
                <BookCard 
                key={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
            descripcion={libro.descripcion}
            imagen={libro.imagen}
            />
        ))
    ) : (
        <p>No hay libros de fantasía disponibles.</p>
    )}
        </div>
    </>
    );
}

export default FantasiaPage;