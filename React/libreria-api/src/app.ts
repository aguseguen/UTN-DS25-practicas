import express from 'express';
import cors from 'cors';
import libroRoutes from './routes/libro.routes.ts';

const app = express();
const PORT = 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/libros', libroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de la API corriendo en http://localhost:${PORT}`);
});