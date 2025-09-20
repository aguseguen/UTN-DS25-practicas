import express from 'express';
import cors from 'cors';
import libroRoutes from './routes/libro.routes.js';

const app = express();
const PORT = 3000;

//Middlewares
const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

//Rutas
app.use('/api/libros', libroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de la API corriendo en http://localhost:${PORT}`);
});