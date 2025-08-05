import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Libro } from '../types/libro.types';

function PsicologiaPage() {
    const [libros, setLibros] = useState<Libro[]> ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null> (null);

    useEffect( () => {
        const fetchLibrosDePsicologia = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/libros/psicologia');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setLibros(data);
            } catch(error) {
                setError("No se pudieron cargar los libros de psicologia");
                console.error(error);
            } finally {
                setCargando(false);
            }
        };

        fetchLibrosDePsicologia();
    }, []);
    if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
    }

    if (cargando) {
    return <div className="container"><p>Cargando libros de psicologia...</p></div>;
    }

return (
    <>
        <h2>Psicología</h2>
        <p>Encuentra las herramientas para comprender tu mente, potenciar tus fortalezas y navegar el complejo mapa de las emociones.</p>
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

export default PsicologiaPage;