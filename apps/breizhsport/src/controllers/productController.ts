import { Request, Response } from 'express';
import Product from '../models/Products';

// Récupérer tous les produits
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des produits', error });
  }
};

// Récupérer un produit par ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du produit', error });
  }
};

// Créer un nouveau produit
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, inStock } = req.body;
    const newProduct = new Product({ name, price, description, inStock });
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Produit créé avec succès', product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du produit', error });
  }
};

// Mettre à jour un produit
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json({ message: 'Produit mis à jour avec succès', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du produit', error });
  }
};

// Supprimer un produit
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du produit', error });
  }
};
