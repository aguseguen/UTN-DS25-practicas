import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegistroForm from '../components/auth/RegistroForm';
import '../styles/AuthPage.css'; // Crearemos este archivo para los estilos

const AuthPage = () => {
  // Este estado controla si mostramos el formulario de Login o el de Registro.
  // `true` = Login, `false` = Registro.
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        {isLoginView ? (
          // Si estamos en la vista de Login...
          <>
            <LoginForm />
            <p className="toggle-text">
              ¿No tienes una cuenta?{' '}
              <button onClick={() => setIsLoginView(false)} className="toggle-button">
                Regístrate
              </button>
            </p>
          </>
        ) : (
          // Si estamos en la vista de Registro...
          <>
            <RegistroForm />
            <p className="toggle-text">
              ¿Ya tienes una cuenta?{' '}
              <button onClick={() => setIsLoginView(true)} className="toggle-button">
                Inicia Sesión
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;