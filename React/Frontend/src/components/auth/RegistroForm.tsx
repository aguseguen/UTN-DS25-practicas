import React, { useState } from 'react';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [sexo, setSexo] = useState('');
  const [temaFavorito, setTemaFavorito] = useState('psicologia');

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== repetirPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (!fechaNacimiento) {
      setError('Por favor, ingresa tu fecha de nacimiento.');
      return;
    }
    if (!sexo) {
        setError('Por favor, selecciona una opción para el sexo.');
        return;
    }

    setLoading(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
      
      const response = await fetch(`${apiBaseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nombre, 
          apellido, 
          email, 
          password,
          // --- ¡AQUÍ ESTÁ LA CORRECCIÓN CLAVE! ---
          fechaNac: new Date(fechaNacimiento).toISOString(), // Enviamos como 'fechaNac'
          sexo, // El valor ya está en minúscula, correcto
          temaFav: temaFavorito, // Enviamos como 'temaFav'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.issues ? errorData.issues[0].message : (errorData.message || 'Error al registrar el usuario.');
        throw new Error(errorMessage);
      }

      alert('¡Te has registrado con éxito! Por favor, inicia sesión.');
      window.location.reload();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h3>Crea tu Cuenta</h3>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="nacimiento">Fecha de Nacimiento</label>
        <input type="date" id="nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Sexo</label>
        <div className="radio-group">
          {/* Los 'value' están en minúscula, lo cual ahora es correcto */}
          <label><input type="radio" name="sexo" value="femenino" checked={sexo === 'femenino'} onChange={(e) => setSexo(e.target.value)} /> Femenino</label>
          <label><input type="radio" name="sexo" value="masculino" checked={sexo === 'masculino'} onChange={(e) => setSexo(e.target.value)} /> Masculino</label>
          <label><input type="radio" name="sexo" value="otro" checked={sexo === 'otro'} onChange={(e) => setSexo(e.target.value)} /> Otro</label>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="tema">Tema Favorito</label>
        <select id="tema" value={temaFavorito} onChange={(e) => setTemaFavorito(e.target.value)}>
          <option value="psicologia">Psicología</option>
          <option value="romance_juvenil">Romance Juvenil</option>
          <option value="fantasia">Fantasía</option>
          <option value="ciencia_ficcion">Ciencia Ficción</option>
        </select>
      </div>

      {/* --- CAMPOS DE CUENTA --- */}
      <div className="form-group">
        <label htmlFor="email-registro">Email</label>
        <input type="email" id="email-registro" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="password-registro">Contraseña</label>
        <input type="password" id="password-registro" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="repetirPassword">Repetir Contraseña</label>
        <input type="password" id="repetirPassword" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)} required />
      </div>
      
      {error && <p className="error-message">{error}</p>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarme'}
      </button>
    </form>
  );
};

export default RegistroForm;