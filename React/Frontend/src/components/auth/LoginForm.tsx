import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../helpers/auth"; 

interface LoginResponse {
  success: boolean;
  token: string;
  error?: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Usamos la variable de entorno para la URL de la API
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
      
      const res = await fetch(`${apiBaseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result: LoginResponse = await res.json();

      if (!res.ok) {
        // Usamos el mensaje de error de la API si existe, si no, uno genérico
        throw new Error(result.error || "Credenciales inválidas.");
      }
      
      if (result.success && result.token) {
        setToken(result.token);
        navigate("/"); // Redirige a la página de inicio
      } else {
        throw new Error("Respuesta inesperada del servidor.");
      }

    } catch (err: any) {
      setError(err.message || "Ocurrió un error en el login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h3>Iniciar Sesión</h3>
      <div className="form-group">
        <label htmlFor="email-login">Email</label>
        <input
          id="email-login"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password-login">Contraseña</label>
        <input
          id="password-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </form>
  );
};

export default LoginForm;