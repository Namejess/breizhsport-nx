"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = express_1.default.Router();
router.get('/products', productController_1.getProducts); // Récupérer tous les produits
router.get('/products/:id', productController_1.getProductById); // Récupérer un produit par ID
router.post('/products', productController_1.createProduct); // Créer un nouveau produit
router.put('/products/:id', productController_1.updateProduct); // Mettre à jour un produit
router.delete('/products/:id', productController_1.deleteProduct); // Supprimer un produit
exports.default = router;
