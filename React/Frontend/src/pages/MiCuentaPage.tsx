import '../styles/MicuentaPage.css'; 
import { useState, useEffect } from 'react';

// Creamos un tipo para los datos del perfil que vamos a recibir
interface UserProfile {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNac: string; // La recibimos como string
  sexo: string;
  temaFav: string | null;
  role: string;
}

const MiCuentaPage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
        const token = localStorage.getItem('token'); 

        const response = await fetch(`${apiBaseUrl}/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('No se pudo cargar tu perfil.');
        }

        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // El array vacío asegura que se ejecute solo una vez

  if (loading) return <div>Cargando perfil...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!profile) return <div>No se encontró tu perfil.</div>;

  return (
    <div className="mi-cuenta-container">
      <div className="mi-cuenta-card">
        <h2>Mi Perfil</h2>
        <div className="info-group">
          <span className="info-label">Nombre:</span>
          <span className="info-value">{profile.nombre} {profile.apellido}</span>
        </div>
        <div className="info-group">
          <span className="info-label">Email:</span>
          <span className="info-value">{profile.email}</span>
        </div>
        <div className="info-group">
          <span className="info-label">Fecha de Nacimiento:</span>
          <span className="info-value">{new Date(profile.fechaNac).toLocaleDateString()}</span>
        </div>
        <div className="info-group">
          <span className="info-label">Género:</span>
          <span className="info-value">{profile.sexo}</span>
        </div>
        <div className="info-group">
          <span className="info-label">Tema Favorito:</span>
          <span className="info-value">{profile.temaFav || 'No especificado'}</span>
        </div>
      </div>
    </div>
  );
};

export default MiCuentaPage;