import BookCard from '../components/BookCard';

const librosDeRomance = [
    { id: 1, titulo: 'Boulevard', autor: 'Flor M. Salvador', descripcion: 'El camino de una chica que creía que el amor solo existía en los libros, hasta que lo conoce a él.', imagen: '/imagenes/portadas/salvador-boulevard.jpg' },
    { id: 2, titulo: 'Romper el círculo', autor: 'Colleen Hoover', descripcion: 'Un drama romántico sobre la fuerza necesaria para tomar las decisiones correctas y escapar de un ciclo de abuso.', imagen: '/imagenes/portadas/romance-hoover.jpg' },
    { id: 3, titulo: 'Nosotros en la luna', autor: 'Alice Kellen', descripcion: 'Una historia sobre la amistad, los sueños y el amor a distancia que se desarrolla a través de emails y años.', imagen: '/imagenes/portadas/romance-kellen.jpg' },
    { id: 4, titulo: 'Rojo, blanco y sangre azul', autor: 'Casey McQuiston', descripcion: '¿Qué pasa cuando el hijo de la presidenta de EEUU y un príncipe británico inician un romance secreto?', imagen: '/imagenes/portadas/romance-mcquiston.jpg' },
    { id: 5, titulo: 'La hipótesis del amor', autor: 'Ali Hazelwood', descripcion: 'Una doctoranda en ciencias finge una relación con un profesor para convencer a sus amigos de que es feliz.', imagen: '/imagenes/portadas/romance-hazelwood.jpg' },
    { id: 6, titulo: 'A todos los chicos de los que me enamoré', autor: 'Jenny Han', descripcion: 'La vida de Lara Jean se vuelve un caos cuando las cartas de amor secretas que escribió son enviadas a sus destinatarios.', imagen: '/imagenes/portadas/romance-han.jpg' }
];

function RomancePage() {
    return (
    <>
        <h2>Romance Juvenil</h2>
        <p>Historias de amores intensos, amistades inquebrantables y las emociones que te atraparán hasta la última página.</p>
        <div className="book-grid">
        {librosDeRomance.map(libro => (
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