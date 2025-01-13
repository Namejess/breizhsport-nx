"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var productRoutes_1 = require("./routes/productRoutes");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT_API_BREIZHSPORT;
// Middleware pour analyser le JSON
app.use(express_1.default.json());
// Connexion à MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(function () { return console.log('MongoDB connecté'); })
    .catch(function (error) { return console.error('Erreur de connexion à MongoDB:', error); });
// Utilisation des routes
app.use('/', productRoutes_1.default);
app.listen(PORT, function () {
    console.log("Serveur en \u00E9coute sur http://localhost:".concat(PORT));
});
