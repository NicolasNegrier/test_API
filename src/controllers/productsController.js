let datas = require("../../data/products.json");

// Initialisation de notre controller pour les produits avec les differentes méthodes

const productsController = {
  // Methode de recupération des produits
  getProducts: (_, res) => {
    try {
      res.json({ message: "Liste de tous les produits", data: datas.products });
    } catch (error) {
      console.error(error.message);
    }
  },

  // Methode d'ajout d'un produit
  postProducts: (req, res) => {
    try {
      // Recupération des informations envoyé dans le body de la requete au format JSON
      newProduct = req.body;
      // Vérification des champs obligatoires
      if (
        !newProduct.id ||
        !newProduct.name ||
        !newProduct.description ||
        !newProduct.price
      ) {
        return res.json({ message: "Merci de remplir tous les champs" });
      }
      // Vérification que l'id et le price soient bien des integers
      if (
        typeof newProduct.id != "number" ||
        typeof newProduct.price != "number"
      ) {
        return res.json({
          message: "l'id et/ou le prix doivent etre un nombre",
        });
      }

      datas.products.push(newProduct);
      res.json({ message: "Produit bien ajouté", data: newProduct });
    } catch (error) {
      console.error(error.message);
    }
  },

  // Methode de récupération d'un product par son id
  getOneProducts: (req, res) => {
    try {
      const idProduct = req.params.id;
      const product = datas.products.filter(
        (product) => product.id == idProduct
      );
      res.json({ message: "Produit selectionné", data: product[0] });
    } catch (error) {
      console.error(error.message);
    }
  },

  // Methode de modification d'un product par son id
  putProducts: (req, res) => {
    try {
      const idProduct = req.params.id;
      // recupération des informations modifiées
      const modifyProduct = req.body;
      // récupération du produit modifié
      let product = datas.products.filter((product) => product.id == idProduct);

      // Test si modification d'une information du produit et si oui, remplacement.
      if (modifyProduct.id) {
        // Vérification du type de l'id afin d'etre sur que ce soit un interger
        if (typeof modifyProduct.id == "number") {
          product[0].id = modifyProduct.id;
        } else {
          return res.json({ message: "l'id doit etre un nombre" });
        }
      }
      if (modifyProduct.name) {
        product[0].name = modifyProduct.name;
      }
      if (modifyProduct.description) {
        product[0].description = modifyProduct.description;
      }
      if (modifyProduct.price) {
        // Vérification du type du price afin d'etre sur qu'on lui envoie un integer
        if (typeof modifyProduct.price == "number") {
          product[0].price = modifyProduct.price;
        } else {
          return res.json({ message: "le prix doit etre un nombre" });
        }
      }

      res.json({
        message: "Produit selectionné modifié",
        data: datas.products,
      });
    } catch (error) {
      console.error(error.message);
    }
  },

  // Suppression d'un produit par son id
  deleteProducts: (req, res) => {
    try {
      const idProduct = req.params.id;
      const products = datas.products.filter(
        (product) => product.id != idProduct
      );
      datas.products = products;
      res.json({ message: "Produit selectionné supprimé", data: products });
    } catch (error) {
      console.error(error.message);
    }
  },
};

// Export de notre controller
module.exports = productsController;

