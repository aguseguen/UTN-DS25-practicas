import { useFetch } from '../hooks/useFetch';
import BookCard from '../components/BookCard';
import { LibroData as Libro} from '../types/libro.types';

type LibrosRomanceJuvenilResponse = Libro[];


function RomancePage() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const url = `${apiUrl}/libros/genero/romance-juvenil`;
    const { data: libros, loading, error } = useFetch<LibrosRomanceJuvenilResponse>(url, {}, true);

    if (loading) {
        return <div className="container"><p>Cargando libros de romance juvenil...</p></div>;
    }

    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
    }

    return (
    <>
        <h2>Romance Juvenil</h2>
        <p>Historias de amores intensos, amistades inquebrantables y las emociones que te atraparán hasta la última página.</p>
        <div className="book-grid">
        {libros && libros.length > 0 ? 
            (libros.map(libro => <BookCard key={libro.id} libro={libro} />)) : 
            (
        <p>No hay libros de romance juvenil disponibles.</p>
    )}
        </div>
    </>
    );
}

export default RomancePage;