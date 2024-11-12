import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT_API_BREIZHSPORT

// Middleware pour analyser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch((error) => console.error('Erreur de connexion à MongoDB:', error));


// Utilisation des routes
app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
