import BookCard from '../components/BookCard';

// Datos de los libros de esta sección
const librosDeCF = [
    { id: 1, titulo: 'Dune', autor: 'Frank Herbert', descripcion: 'En un futuro lejano, la lucha por el control del desértico planeta Arrakis y su valiosa especia definirá el destino del universo.', imagen: '/imagenes/portadas/dune.jpg' },
    { id: 2, titulo: 'Fundación', autor: 'Isaac Asimov', descripcion: 'Un imperio galáctico en decadencia y el plan de un científico para preservar el conocimiento humano a través de milenios.', imagen: '/imagenes/portadas/scifi-asimov.jpg' },
    { id: 3, titulo: '1984', autor: 'George Orwell', descripcion: 'Una visión aterradora de un futuro totalitario donde el Gran Hermano todo lo ve y la libertad de pensamiento es un crimen.', imagen: '/imagenes/portadas/scifi-orwell.jpg' },
    { id: 4, titulo: 'Un mundo feliz', autor: 'Aldous Huxley', descripcion: 'Una sociedad futurista que ha sacrificado la libertad individual por una felicidad artificial y controlada genéticamente.', imagen: '/imagenes/portadas/scifi-huxley.jpg' },
    { id: 5, titulo: 'El juego de Ender', autor: 'Orson Scott Card', descripcion: 'Un niño prodigio es reclutado para un duro entrenamiento militar en el espacio y convertirse en la última esperanza de la humanidad.', imagen: '/imagenes/portadas/scifi-card.jpg' },
    { id: 6, titulo: 'Neuromante', autor: 'William Gibson', descripcion: 'La novela que definió el género cyberpunk, sobre un hacker que es contratado para una última misión en un mundo de inteligencias artificiales.', imagen: '/imagenes/portadas/scifi-gibson.jpg' }
]

function CienciaFiccionPage() {
    return (
    <>
        <h2>Ciencia Ficcion</h2>
            <p>Cuestiona los límites de la realidad, viaja a futuros lejanos y explora las grandes ideas que definirán a la humanidad.</p>
        <div className="book-grid">
        {librosDeCF.map(libro => (
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