import BookCard from '../components/BookCard';

const librosDePsicologia = [
    { id: 1, titulo: 'Historias de diván', autor: 'Gabriel Rolón', descripcion: 'Ocho relatos de vida que transcurren en el consultorio de un psicoanalista, explorando el dolor y la superación.', imagen: '/imagenes/portadas/rolon-divan.jpg' },
    { id: 2, titulo: 'Hábitos Atómicos', autor: 'James Clear', descripcion: 'Un método fácil y comprobado para construir buenos hábitos y romper los malos a través de pequeños cambios.', imagen: '/imagenes/portadas/psico-clear.jpg' },
    { id: 3, titulo: 'El hombre en busca de sentido', autor: 'Viktor Frankl', descripcion: 'La experiencia de un psiquiatra en los campos de concentración y su inspiradora visión sobre el propósito de la vida.', imagen: '/imagenes/portadas/psico-frankl.jpg' },
    { id: 4, titulo: 'Inteligencia Emocional', autor: 'Daniel Goleman', descripcion: 'Un análisis profundo sobre cómo la gestión de nuestras emociones es clave para el éxito personal y profesional.', imagen: '/imagenes/portadas/psico-goleman.jpg' },
    { id: 5, titulo: 'El poder del ahora', autor: 'Eckhart Tolle', descripcion: 'Una guía espiritual para liberarse del sufrimiento psicológico y encontrar la paz viviendo en el presente.', imagen: '/imagenes/portadas/psico-tolle.jpg' },
    { id: 6, titulo: 'El sutil arte de que te importe un caraj*', autor: 'Mark Manson', descripcion: 'Un enfoque disruptivo para vivir una vida más plena, aceptando nuestras limitaciones y eligiendo qué nos importa.', imagen: '/imagenes/portadas/psico-manson.jpg' }
];

function PsicologiaPage() {
return (
    <>
        <h2>Psicología</h2>
        <p>Encuentra las herramientas para comprender tu mente, potenciar tus fortalezas y navegar el complejo mapa de las emociones.</p>
        <div className="book-grid">
        {librosDePsicologia.map(libro => (
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