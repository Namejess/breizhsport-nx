import express from 'express';
import httpProxy from 'http-proxy';

const app = express();
const apiProxy = httpProxy.createProxyServer();

// Proxy pour le service API principal
app.use('/api', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3001', changeOrigin: true }, (error) => {
    console.error('Erreur de connexion à l\'API principale:', error);
    res.status(502).json({ error: 'Bad Gateway', message: 'Impossible de joindre l\'API principale.' });
  });
  console.log('Redirection vers le port 3001');
});

// Route vers le service d'authentification
app.use('/auth', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3002' });
  console.log("Ca écoute sur le port 3002")
});

app.listen(3000, () => {
  console.log('API Gateway en écoute sur http://localhost:3000');
});