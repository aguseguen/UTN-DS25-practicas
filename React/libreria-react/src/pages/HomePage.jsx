import BookCard from "../components/BookCard";

const librosDeFantasia = [
    {
        id:1,
        titulo: 'Cuarta Ala',
        autor: 'Rebecca Yarros',
        descripcion: 'Violet Sorrengail debía vivir una vida tranquila, pero por orden de su madre, se une a los jinetes de dragones.',
        imagen: '/imagenes/portadas/cuarta-ala.jpg'
    },

];

function HomePage() {
    return (
        <div>
            <h2>Fantasia</h2>
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
        </div>
    );
};

export default HomePage;
