import { Link } from 'react-router-dom';

function Nav() {
    return (
    <nav className="main-nav">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/genero/psicologia">Psicología</Link></li>
            <li><Link to="/genero/romance">Romance</Link></li>
            <li><Link to="/genero/fantasia">Fantasía</Link></li>
            <li><Link to="/genero/ciencia-ficcion">Ciencia Ficción</Link></li>
            <li><Link to="/registro">Regístrate</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    );
}
export default Nav;