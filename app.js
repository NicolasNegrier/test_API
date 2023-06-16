// Importation des modules necessaires au fonctionnement de l'API
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const token = require("./src/middlewares/tokenMiddleware");
const router = require("./src/router");

// Initialisation du port d'écoute de notre serveur API
const port = process.env.PORT;

// Initialisation de express
const app = express();

// Utilisation de body-parser comme middleware afin d'exploiter les fichiers JSON envoyé (POST) à notre API et d'envoyer des fichiers JSON en réponse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utilisation du middleware token
app.use(token);

// Information d'utilisation de notre router pour les routes de notre API
app.use(router);

// Initailisation de l'écoute de notre serveur sur le port indiqué dans le .env
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur http://localhost:${port}`);
});
