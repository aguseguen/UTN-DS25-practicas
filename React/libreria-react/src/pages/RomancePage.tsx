import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Libro } from '../types/libro.types';

function RomancePage() {
    const [libros, setLibros] = useState<Libro[]> ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null> (null);

    useEffect( () => {
        const fetchLibrosDeRomance = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/libros/romance');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setLibros(data);
            } catch(error) {
                setError("No se pudieron cargar los libros de romance");
                console.error(error);
            } finally {
                setCargando(false);
            }
        };

        fetchLibrosDeRomance();
    }, []);
    if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
    }

    if (cargando) {
    return <div className="container"><p>Cargando libros de romance...</p></div>;
    }

    return (
    <>
        <h2>Romance Juvenil</h2>
        <p>Historias de amores intensos, amistades inquebrantables y las emociones que te atraparán hasta la última página.</p>
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

export default RomancePage;