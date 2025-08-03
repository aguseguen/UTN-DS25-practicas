import { Link } from 'react-router-dom';

function Nav() {
    return (
    <nav className="main-nav">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/psicologia">Psicología</Link></li>
            <li><Link to="/romance">Romance</Link></li>
            <li><Link to="/fantasia">Fantasía</Link></li>
            <li><Link to="/ciencia-ficcion">Ciencia Ficción</Link></li>
            <li><Link to="/registro">Regístrate</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    );
}

export default Nav;