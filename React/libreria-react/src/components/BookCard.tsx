type BookCard = {
    imagen: string;
    titulo: string;
    autor: string;
    descripcion: string;
};


function BookCard ({imagen, titulo, autor, descripcion}: BookCard) {
    return (
        <div className="book-card">
            <img src={imagen} alt={'Portada de ${titulo}'} />
            <h4>{titulo}</h4>
            <p className="author">{autor}</p>
            <p className="description">{descripcion}</p>
        </div>
    )
};

export default BookCard