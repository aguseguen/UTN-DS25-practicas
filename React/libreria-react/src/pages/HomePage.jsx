import { Link } from 'react-router-dom'; 

const librosDestacados = [
    {
        id: 1,
        genero: 'Psicología',
        titulo: 'Historias de diván',
        autor: 'Gabriel Rolón',
        imagen: '/imagenes/portadas/rolon-divan.jpg',
        linkTo: '/psicologia' 
    },
    {
        id: 2,
        genero: 'Romance Juvenil',
        titulo: 'Boulevard',
        autor: 'Flor M. Salvador',
        imagen: '/imagenes/portadas/salvador-boulevard.jpg',
        linkTo: '/romance'
    },
    {
        id: 3,
        genero: 'Fantasía',
        titulo: 'Cuarta Ala',
        autor: 'Rebecca Yarros',
        imagen: '/imagenes/portadas/cuarta-ala.jpg',
        linkTo: '/fantasia'
    },
    {
        id: 4,
        genero: 'Ciencia Ficción',
        titulo: 'Dune',
        autor: 'Frank Herbert',
        imagen: '/imagenes/portadas/dune.jpg',
        linkTo: '/ciencia-ficcion'
    }
];


function HomePage() {
return (
    <>
        <h2>Novedades por Género</h2>

        {/* 2. Uso .map() para recorrer los datos y crear una sección por cada libro */}
        {librosDestacados.map(libro => (
            <section key={libro.id} className="genre-section">
                
                {/* 3. Uso el componente <Link> para que el título sea un enlace */}
                <h3>
                    <Link to={libro.linkTo}>{libro.genero}</Link>
                </h3>

                <div className="featured-book">
                    <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
                    <h4>{libro.titulo}</h4>
                    <p>{libro.autor}</p>
                </div>
            </section>
        ))}
    </>
);
}

export default HomePage;