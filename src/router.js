// Importation des modules necessaires au fonctionnement de l'API
const express = require('express');

// Importation de notre controller
const productsController = require('../src/controllers/productsController');

// Initialisation du router
const router = express.Router();

// Route récupération de tous les produits
router.get('/products', productsController.getProducts);
// Route d'ajout d'un produit à la liste de produits
router.post('/products', productsController.postProducts);
// Route de récupération d'un produit par son id
router.get('/products/:id', productsController.getOneProducts);
// Route de modification d'un produit
router.put('/products/:id', productsController.putProducts);
// Route de suppression d'un produit
router.delete('/products/:id', productsController.deleteProducts);

module.exports = router;
