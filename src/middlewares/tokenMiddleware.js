require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    // Recupération du token envoyé par le client par dans les headers
    const token = req.header("x-auth-token");
    // Vérification du token
    if (!token || token != process.env.TOKEN) {
      return res.status(403).send("Access denied.");
    } else {
      next();
    }
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
