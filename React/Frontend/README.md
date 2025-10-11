# Librería "El Rincón Lector" - Frontend con React

Este es el frontend de la aplicación de la librería "El Rincón Lector", desarrollado como proyecto para la materia Desarrollo de Software. Es una Single Page Application (SPA) construida con React y TypeScript que consume datos desde una API propia.

## Características Principales

- **Catálogo de Libros:** Visualización de libros por categorías (Fantasía, Psicología, etc.).
- **Navegación Dinámica:** Uso de React Router para una experiencia de usuario fluida y sin recargas de página.
- **Diseño Moderno:** Interfaz estilizada con CSS puro, aplicando conceptos como Flexbox y Grid.
- **Componentes Reutilizables:** Arquitectura basada en componentes para un código limpio y mantenible.

## Cómo Ejecutar el Proyecto

Para correr esta aplicación, necesitas tener tanto el frontend como el backend funcionando simultáneamente.

### Prerrequisitos

- Node.js (v18 o superior)
- Git

### Pasos para la Instalación

1.  **Clonar el repositorio completo:**
    ```bash
    git clone https://github.com/aguseguen/UTN-DS25-practicas.git
    cd utn-ds25-practicas
    ```

2.  **Instalar dependencias del Frontend:**
    ```bash
    cd React/libreria-react
    npm install
    ```

3.  **Instalar dependencias del Backend:**
    (Desde otra terminal, en la raíz del proyecto)
    ```bash
    cd React/libreria-api
    npm install
    ```

### Ejecución

Necesitarás **dos terminales abiertas** al mismo tiempo:

1.  **Terminal 1 (Frontend):**
    Desde la carpeta `React/libreria-react`, ejecuta:
    ```bash
    npm run dev
    ```
    El frontend estará disponible en `http://localhost:5173`.

2.  **Terminal 2 (Backend):**
    Desde la carpeta `React/libreria-api`, ejecuta:
    ```bash
    npm run dev
    ```
    La API estará escuchando en `http://localhost:3000`.

Una vez que ambos servidores estén corriendo, abre `http://localhost:5173` en tu navegador para ver la aplicación.