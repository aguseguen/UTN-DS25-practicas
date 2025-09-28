import { Link } from 'react-router-dom';
import { LibroData as Libro } from '../types/libro.types';
import { useFetch } from '../hooks/useFetch';

type LibrosDestacadosResponse = Libro[];

function HomePage() {
  const url = 'http://localhost:3000/api/libros/destacados';
  const { data: libros, loading, error } = useFetch<LibrosDestacadosResponse>(url, {}, true);

  if (loading) {
    return <div className="container"><p>Cargando libros...</p></div>;
  }

  if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error.message}</p></div>;
  }

  return (
    <div className="container">
      <h2>Novedades por Género</h2>

      {libros && libros.length > 0 ? (
        libros.map(libro => (
          <section key={libro.id} className="genre-section">
            <h3>
              <Link to={`/genero/${libro.genero}`}>{libro.genero}</Link>
            </h3>
            <div className="featured-book">
              {libro.imagen && <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />}
              <h4>{libro.titulo}</h4>
              <p>{libro.autor}</p>
            </div>
          </section>
        ))
      ) : (
        <p>No se encontraron libros destacados.</p>
      )}
    </div>
  );
}

export default HomePage;