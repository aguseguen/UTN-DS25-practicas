import BookCard from '../components/BookCard';

// Datos de los libros de esta sección
const librosDeFantasia = [
    { id: 1, titulo: 'Cuarta Ala', autor: 'Rebecca Yarros', descripcion: 'Violet Sorrengail debía vivir una vida tranquila...', imagen: '/imagenes/portadas/cuarta-ala.jpg' },
    { id: 2, titulo: 'El Nombre del Viento', autor: 'Patrick Rothfuss', descripcion: 'La legendaria historia de Kvothe, un músico, mendigo, ladrón...', imagen: '/imagenes/portadas/fantasia-nombre-viento.jpg' },
    { id: 3, titulo: 'El Priorato del Naranjo', autor: 'Samantha Shannon', descripcion: 'Un mundo de reinas, magos y jinetes de dragones que deben unirse...', imagen: '/imagenes/portadas/fantasia-priorato.jpg' },
    { id: 4, titulo: 'El Imperio Final', autor: 'Brandon Sanderson', descripcion: 'En un mundo de cenizas, una joven ladrona descubre que tiene los poderes...', imagen: '/imagenes/portadas/scifi-asimov.jpg' },
    { id: 5, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', descripcion: 'El viaje épico de Frodo para destruir el Anillo Único y salvar la Tierra Media...', imagen: '/imagenes/portadas/fantasia-tolkien.jpg' },
    { id: 6, titulo: 'Circe', autor: 'Madeline Miller', descripcion: 'La historia de la diosa Circe, desterrada por su poder, que se cruza con los mortales...', imagen: '/imagenes/portadas/fantasia-circe.jpg' }
];

function FantasiaPage() {
    return (
    <>
        <h2>Fantasía</h2>
            <p>Viaja a mundos imposibles, donde la magia es real y la aventura te espera en cada página.</p>
        <div className="book-grid">
        {librosDeFantasia.map(libro => (
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