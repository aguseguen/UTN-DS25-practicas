import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Libro } from '../types/libro.types';

function FantasiaPage() {
    const [libros, setLibros] = useState<Libro[]> ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null> (null);

    useEffect( () => {
        const fetchLibrosDeFantasia = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/libros/fantasia');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setLibros(data);
            } catch(error) {
                setError("No se pudieron cargar los libros de fantasia");
                console.error(error);
            } finally {
                setCargando(false);
            }
        };

        fetchLibrosDeFantasia();
    }, []);
    if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
    }

    if (cargando) {
    return <div className="container"><p>Cargando libros de fantasía...</p></div>;
    }

    return (
    <>
        <h2>Fantasía</h2>
            <p>Viaja a mundos imposibles, donde la magia es real y la aventura te espera en cada página.</p>
        <div className="book-grid">
        {libros.map(libro => (
            <BookCard 
            key={libro.id}
            titulo={libro.titulo}
            autor={libro.autor}
            descripcion={libro.descripcion}
            imagen={libro.imagen}
            />
        ))}
        </div>
    </>
    );
}

export default FantasiaPage;