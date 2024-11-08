import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

// Désactive l'en-tête X-Powered-By pour ne pas divulguer la version d'Express
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});