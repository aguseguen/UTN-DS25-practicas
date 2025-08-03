// Archivo: src/main.jsx

// 1. Herramientas de React y React Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. Importar el Layout Principal (la plantilla)
import App from './App.jsx';

// 3. Importar TODOS los componentes de página que creaste
import HomePage from './pages/HomePage.jsx';
import PsicologiaPage from './pages/PsicologiaPage.jsx';
import RomancePage from './pages/RomancePage.jsx';
import FantasiaPage from './pages/FantasiaPage.jsx';
import CienciaFiccionPage from './pages/CienciaFiccionPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import RegistroPage from './pages/RegistroPage.jsx';

// 4. Crear el "mapa" de rutas de tu aplicación
const router = createBrowserRouter([
  {
    // Ruta Raíz: Todas las páginas usarán este layout
    path: '/',
    element: <App />, // El layout principal con Header, Nav y Footer
    
    // Rutas Hijas: Se renderizan dentro del <Outlet/> de App.jsx
    children: [
      {
        index: true, // Esta es la página de inicio por defecto
        element: <HomePage />,
      },
      {
        path: 'psicologia',
        element: <PsicologiaPage />,
      },
      {
        path: 'romance',
        element: <RomancePage />,
      },
      {
        path: 'fantasia',
        element: <FantasiaPage />,
      },
      {
        path: 'ciencia-ficcion',
        element: <CienciaFiccionPage />,
      },
      {
        path: 'registro',
        element: <RegistroPage />,
      },
      {
        path: 'contacto',
        element: <ContactoPage />,
      },
    ],
  },
]);

// 5. Iniciar la aplicación con el router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);