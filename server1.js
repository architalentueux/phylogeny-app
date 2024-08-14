import express from 'express';
import { handler } from './build/handler.js'; // Importation du handler de SvelteKit
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 5173; // Port sur lequel vous voulez exécuter votre application

// Définir __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir les fichiers statiques du dossier 'build/client/assets/img'
app.use('/assets', express.static(join(__dirname, 'build/server/_app/immutable/assets/')));

// Utiliser le handler de SvelteKit pour toutes les autres requêtes
app.use(handler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((req, res, next) => {
  console.log(`Requested URL: ${req.url}`);
  next();
});

