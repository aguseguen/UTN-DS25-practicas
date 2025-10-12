import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Vistas principales y layout
import App from './App';
import HomePage from './pages/HomePage';
import GeneroPage from './pages/GeneroPage';
import ContactoPage from './pages/ContactoPage';
import AuthPage from './pages/AuthPage'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta para Login y Registro (no usa el layout principal) */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Rutas que usan el Layout Principal (Header, Nav, Footer) */}
        <Route path="/" element={<App />}>
          {/* La página de inicio */}
          <Route index element={<HomePage />} />
          <Route path="/genero/:genero" element={<GeneroPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          
          {/* Ya no necesitamos la ruta /registro aquí */}
        </Route>

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <h2>¡Oops! Página no encontrada (404)</h2>
            <p>La página que buscas no existe.</p>
            <Link to="/">Volver al inicio</Link>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);