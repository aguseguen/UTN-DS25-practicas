import { useFetch } from '../hooks/useFetch';
import BookCard from '../components/BookCard';
import { LibroData } from '../types/libro.types';

type LibrosPsicologiaResponse = LibroData[];

function PsicologiaPage() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const url = `${apiUrl}/libros/genero/psicologia`;
    const { data: libros, loading, error } = useFetch<LibrosPsicologiaResponse>(url, {}, true);

    if (loading) {
        return <div className="container"><p>Cargando libros de psicologia...</p></div>;
    }

    if (error) {
        return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
    }

    return (
        <>
            <h2>Psicología</h2>
            <p>Encuentra las herramientas para comprender tu mente, potenciar tus fortalezas y navegar el complejo mapa de las emociones.</p>
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
                    <p>No se encontraron libros de psicología.</p>
                )}
            </div>
        </>
    );
}

export default PsicologiaPage;