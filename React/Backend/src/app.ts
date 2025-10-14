import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { libroRoutes } from './routes/libro.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { autorRoutes } from './routes/autor.routes.js';
import { seccionRoutes } from './routes/seccion.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { handleError } from './middlewares/error.middleware.js';
import { logRequest } from './middlewares/logger.middleware.js';
import path from 'path';


dotenv.config();


const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'
const app = express();

// Lista de orígenes permitidos. 
const allowedOrigins = [
    'http://localhost:5173', // Tu frontend local
    'https://utn-ds-25-practicas-ochre.vercel.app' // Tu frontend en Vercel
];

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        // Permite peticiones sin 'origin' (como las de Postman o apps móviles)
        if (!origin) return callback(null, true);

        // Si el origen está en la lista de permitidos, se permite la petición
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'La política de CORS para este sitio no permite acceso desde el origen especificado.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};

// Aplica la configuración de CORS a tu app
app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Logger Middleware
app.use(logRequest);
const publicPath = path.resolve(__dirname, '../public');
app.use('/public', express.static(publicPath));
// Health check
app.get('/healthz', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

//Rutas
app.use('/api/auth', authRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/users', userRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/secciones', seccionRoutes);



// Middleware de manejo de errores
app.use(handleError);

//Iniciar servidor
app.listen(Number(PORT), HOST, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
