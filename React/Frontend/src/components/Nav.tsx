import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Nav = () => {
    const { isAuthenticated,logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };


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
                {isAuthenticated ? (
                    // Si el usuario ESTÁ logueado
                    <>
                        <li><NavLink to="/mi-cuenta">Mi Cuenta {user.email}</NavLink></li>
                        <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
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