import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';

const router = express.Router();

router.get('/products', getProducts);            // Récupérer tous les produits
router.get('/products/:id', getProductById);     // Récupérer un produit par ID
router.post('/products', createProduct);         // Créer un nouveau produit
router.put('/products/:id', updateProduct);      // Mettre à jour un produit
router.delete('/products/:id', deleteProduct);   // Supprimer un produit

export default router;
