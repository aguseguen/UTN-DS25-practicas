import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Libro } from '../types/libro.types';

function CienciaFiccionPage() {
    const [libros, setLibros] = useState<Libro[]> ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null> (null);

    useEffect( () => {
        const fetchLibrosDeCienciaFiccion = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/libros/cienciaFiccion');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setLibros(data);
            } catch(error) {
                setError("No se pudieron cargar los libros de ciencia ficcion");
                console.error(error);
            } finally {
                setCargando(false);
            }
        };

        fetchLibrosDeCienciaFiccion();
    }, []);
    if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
    }

    if (cargando) {
    return <div className="container"><p>Cargando libros de ciencia ficcion...</p></div>;
    }

    return (
    <>
        <h2>Ciencia Ficcion</h2>
            <p>Cuestiona los límites de la realidad, viaja a futuros lejanos y explora las grandes ideas que definirán a la humanidad.</p>
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

export default CienciaFiccionPage;