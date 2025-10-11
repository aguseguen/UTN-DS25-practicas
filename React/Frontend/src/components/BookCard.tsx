import { LibroData } from "src/types/libro.types";

type BookCardProps = {
    libro: LibroData;
};

function BookCard ({libro}: BookCardProps) {
    return (
        <div className="book-card">
            <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
            <h4>{libro.titulo}</h4>
            <p className="author">{libro.autor}</p>
            <p className="description">{libro.descripcion}</p>
        </div>
    )
};

export default BookCard