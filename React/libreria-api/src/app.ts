import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { libroRoutes } from './routes/libro.routes';
import { userRoutes } from './routes/user.routes';
import { authRoutes } from './routes/auth.routes';
import { logRequest } from './middlewares/logger.middleware';

dotenv.config();

const app = express();
const PORT = 3000;

//Middlewares
const corsOptions = {
    origin: 'http://localhost:5173', //Front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Logger Middleware
app.use(logRequest); 

//Rutas
app.use('/api/libros', libroRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Servidor de la API corriendo en http://localhost:${PORT}`);
});