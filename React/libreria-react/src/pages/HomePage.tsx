import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Libro } from '../types/libro.types'


function HomePage() {

  const [libros, setLibros] = useState<Libro[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibrosDestacados = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/libros/destacados');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue exitosa');
        }
        const data = await response.json();
        setLibros(data);
      } catch (error) {
        console.error("Error al cargar los libros destacados:", error);
        setError("No se pudieron cargar los libros. ¿El servidor del backend está funcionando?");
      } finally {
        setCargando(false);
      }
    };

    fetchLibrosDestacados();
  }, []);

  if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
  }

  if (cargando) {
    return <div className="container"><p>Cargando libros...</p></div>;
  }

  return (
    <>
      <h2>Novedades por Género</h2>

      {libros.map(libro => (
        <section key={libro.id} className="genre-section">
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