import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, user } = useAuth();

  // Si el usuario no está autenticado, lo redirigimos a la página de login/registro.
  // El 'replace' evita que el usuario pueda volver atrás en el historial del navegador.
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Si el usuario está autenticado, renderizamos el componente hijo que esta ruta protege.
  // Outlet es el "lugar" donde se renderizará la página real (ej: MiCuentaPage).
  return <Outlet />;
};

export default ProtectedRoute;