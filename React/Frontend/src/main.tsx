import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from 'src/App';
import HomePage from 'src/pages/HomePage';
import LoginPage from 'src/pages/LoginPage';
import GeneroPage from './pages/GeneroPage';
import ContactoPage from './pages/ContactoPage';
import RegistroPage from './pages/RegistroPage';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta para el Login (no usa el layout principal) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas que usan el Layout Principal (Header, Nav, Footer) */}
        <Route path="/" element={<App />}>
          {/* La página de inicio */}
          <Route index element={<HomePage />} />
          <Route path="/genero/:genero" element={<GeneroPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/registro" element={<RegistroPage />} />
        </Route>
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