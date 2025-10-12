import { NavLink } from 'react-router-dom';

const Nav = () => {
    // Por ahora, simularemos que el usuario no está logueado.
    // Más adelante, esto dependerá de si existe un token o no.
    const isUserLoggedIn = false; 

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/" end>Inicio</NavLink></li>
                <li><NavLink to="/genero/fantasia">Fantasía</NavLink></li>
                <li><NavLink to="/genero/ciencia-ficcion">Ciencia Ficción</NavLink></li>
                <li><NavLink to="/genero/romance">Romance</NavLink></li>
                <li><NavLink to="/genero/psicologia">Psicología</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
                
                {/* --- LÓGICA CORREGIDA --- */}
                {isUserLoggedIn ? (
                    // Si el usuario ESTÁ logueado
                    <>
                        <li><NavLink to="/mi-cuenta">Mi Cuenta</NavLink></li>
                        <li><button>Cerrar Sesión</button></li>
                    </>
                ) : (
                    // Si el usuario NO ESTÁ logueado
                    <li>
                        <NavLink to="/auth" className="login-button">
                            Ingresar
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;