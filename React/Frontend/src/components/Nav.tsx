import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link is-active" : "nav-link";

  const getPillLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link nav-link-pill is-active" : "nav-link nav-link-pill";

  const getAccountLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-account-link is-active" : "nav-account-link";

  const role = (user as { role?: string } | null)?.role ?? "";
  const isAdmin = role.toUpperCase() === "ADMIN";

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" end className={getNavLinkClass}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/genero/fantasia" className={getNavLinkClass}>
            Fantasia
          </NavLink>
        </li>
        <li>
          <NavLink to="/genero/ciencia-ficcion" className={getNavLinkClass}>
            Ciencia Ficcion
          </NavLink>
        </li>
        <li>
          <NavLink to="/genero/romance" className={getNavLinkClass}>
            Romance
          </NavLink>
        </li>
        <li>
          <NavLink to="/genero/psicologia" className={getNavLinkClass}>
            Psicologia
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalogo" className={getNavLinkClass}>
            Catalogo
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={getNavLinkClass}>
            Contacto
          </NavLink>
        </li>

        {isAuthenticated ? (
          <>
            {isAdmin && (
              <li>
                <NavLink
                  to="/admin/libros/nuevo"
                  className={getPillLinkClass}
                >
                  Nuevo libro
                </NavLink>
              </li>
            )}
            <li className="nav-account">
              <NavLink to="/mi-cuenta" className={getAccountLinkClass}>
                <span className="account-label">Mi cuenta</span>
                <span className="account-email">{user?.email ?? ""}</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="logout-button"
                onClick={handleLogout}
              >
                Cerrar sesion
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/auth" className={getPillLinkClass}>
              Ingresar
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
