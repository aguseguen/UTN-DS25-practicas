import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/MicuentaPage.css";

interface UserProfile {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNac: string;
  sexo: string;
  temaFav: string | null;
  role: string;
}

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  return date.toLocaleDateString();
};

const MiCuentaPage = () => {
  const { token, user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    [],
  );

  useEffect(() => {
    const fetchProfile = async () => {
      const authToken = token ?? localStorage.getItem("token");
      if (!authToken) {
        setError("No encontramos tu sesion. Inicia nuevamente.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${apiBaseUrl}/users/profile`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("No se pudo cargar tu perfil.");
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "No pudimos cargar tu informacion por ahora.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [apiBaseUrl, token]);

  if (loading) {
    return (
      <div className="mi-cuenta-status" role="status">
        Cargando perfil...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mi-cuenta-status mi-cuenta-status-error" role="alert">
        {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mi-cuenta-status mi-cuenta-status-error" role="alert">
        No encontramos tu perfil.
      </div>
    );
  }

  const initials =
    `${profile.nombre?.[0] ?? ""}${profile.apellido?.[0] ?? ""}`
      .toUpperCase()
      .trim() || profile.email?.[0]?.toUpperCase() || "?";

  const roleLabel = profile.role?.toUpperCase() ?? "USER";

  const fullName = `${profile.nombre} ${profile.apellido}`.trim();

  return (
    <main className="mi-cuenta-container">
      <section className="mi-cuenta-card">
        <div className="mi-cuenta-header">
          <div className="mi-cuenta-avatar" aria-hidden="true">
            {initials}
          </div>
          <div className="mi-cuenta-header-info">
            <h1>{fullName || "Sin nombre"}</h1>
            <p className="mi-cuenta-email">{profile.email}</p>
            <span
              className={`mi-cuenta-role ${
                roleLabel === "ADMIN" ? "is-admin" : "is-user"
              }`}
            >
              {roleLabel}
            </span>
          </div>
        </div>

        <div className="mi-cuenta-body">
          <div className="mi-cuenta-info-grid">
            <article className="info-card">
              <span className="info-label">Fecha de nacimiento</span>
              <span className="info-value">{formatDate(profile.fechaNac)}</span>
            </article>
            <article className="info-card">
              <span className="info-label">Genero</span>
              <span className="info-value">{profile.sexo || "-"}</span>
            </article>
            <article className="info-card">
              <span className="info-label">Tema favorito</span>
              <span className="info-value">
                {profile.temaFav?.trim() || "Sin preferencia"}
              </span>
            </article>
            <article className="info-card">
              <span className="info-label">ID de usuario</span>
              <span className="info-value">#{profile.id}</span>
            </article>
          </div>

          <div className="mi-cuenta-highlight">
            <h2>Tu biblioteca, a un clic</h2>
            <p>
              Guardamos tus preferencias para recomendarte lecturas acordes a tus
              gustos. Actualiza tus datos cuando quieras desde soporte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MiCuentaPage;
