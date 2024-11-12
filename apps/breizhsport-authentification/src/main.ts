import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT_AUTH ? Number(process.env.PORT_AUTH) : 3002;
const app = express();

// Désactive l'en-tête X-Powered-By pour ne pas divulguer la version d'Express
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send({ message: 'Hello API 3002' });
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});