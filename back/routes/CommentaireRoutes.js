const express = require('express');
const route = express.Router()

const commentaire = require('../models/commentaires')

const controller = require('../controller/commentaireController')

// API
route.post('/api/ajoutCommentaire', controller.create);
route.get('/api/SelectCommentaire', controller.find);
route.put('/api/updateCommentaire/:id', controller.update);
route.delete('/api/deleteCommentaire/:id', controller.delete);




route.get('/getCommentByProduit/:produit', async (req, res) => {
  try {
    const oneComt = await commentaire.find({ produit: req.params.produit }).populate("produit");
    return res.status(200).json(oneComt);
  } catch (error) {
    console.error("Erreur lors de la récupération:", error.message);
    return res.status(500).send({ message: "Erreur lors de la récupération des commentaires" });
  }
});

module.exports = route