import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../helpers/auth";

interface LoginResponse {
  success: boolean;
  token: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com"); // <- Pon un usuario de prueba
  const [password, setPassword] = useState("password123"); // <- Pon una contraseña de prueba
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result: LoginResponse = await res.json();

      if (!res.ok || !result.success) {
        throw new Error((result as any).error || "Credenciales inválidas.");
      }
      
      if (result && result.token) {
        setToken(result.token);
        navigate("/"); // Redirige a la página de inicio
      } else {
        // Si el token no viene en la respuesta, es un error inesperado.
      throw new Error("Error inesperado: no se recibió el token.");
    }

    } catch (err: any) {
      setError(err.message || "Ocurrió un error en el login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', width: '350px' }}>
        <h2>Iniciar Sesión</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.75rem', cursor: 'pointer' }}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}