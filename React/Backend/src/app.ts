import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { libroRoutes } from './routes/libro.routes';
import { userRoutes } from './routes/user.routes';
import { autorRoutes } from './routes/autor.routes';
import { seccionRoutes } from './routes/seccion.routes';
import { authRoutes } from './routes/auth.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

//Middlewares
const corsOptions = {
    origin: process.env.FRONT_URL || 'http://localhost:5173', //Front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Logger Middleware
app.use(logRequest);
const publicPath = path.resolve(__dirname, '../public');
app.use('/public', express.static(publicPath));

//Rutas
app.use('/api/auth', authRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/users', userRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/secciones', seccionRoutes);



// Middleware de manejo de errores
app.use(handleError);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'
//Iniciar servidor
app.listen(Number(PORT), HOST, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});