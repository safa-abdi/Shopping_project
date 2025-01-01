const express = require('express');
const route = express.Router()

const commande = require('../models/commande')
const Produit=require('../models/produit')
const controller = require('../controller/CommandeController')

// API
route.post('/api/ajoutCommande', controller.create);
route.get('/api/SelectCommande', controller.find);
route.put('/api/updateCommande/:id', controller.update);
route.delete('/api/deleteCommande/:id', controller.delete);


route.post('/add-commande', async (req, res) => {
  try {
    // Extract data from request body
    const { adresse, nom, prenom, Num_tel, email, city, quantité, produits } = req.body;

    // Create a new order (commande) instance
    const newCommande = new commande({
      adresse,
      nom,
      prenom,
      Num_tel,
      email,
      city,
      quantité,
      produits,
    });

    // Save the new order to the database
    const savedCommande = await newCommande.save();

    // Respond with the saved order data
    res.status(201).json({ message: 'Commande added successfully', commande: savedCommande });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Error adding commande', error: error.message });
  }
});
route.get('/commandes-par-utilisateur/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find all products associated with this user
    const produits = await Produit.find({ utilisateurr: userId });

    // Extract product IDs
    const productIds = produits.map(produit => produit._id);

    // Find all commandes related to the found products
    const commandes = await commande.find({ produits: { $in: productIds } })
      .populate('produits'); // Optionally populate the products in the commande

    // If no commandes are found
    if (!commandes || commandes.length === 0) {
      return res.status(404).json({ message: "No commandes found for this user's products" });
    }

    // Return the commandes
    res.status(200).json(commandes);
  } catch (error) {
    console.error("Error fetching commandes:", error);
    res.status(500).json({ message: "An error occurred while fetching commandes" });
  }
});
route.get('/commandes-par-utilisateurStat/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;

      // Find all products associated with this user
      const produits = await Produit.find({ utilisateurr: userId });

      // Check if products are found
      if (!produits.length) {
          return res.status(404).json({ message: "No products found for this user." });
      }

      // Extract product IDs
      const productIds = produits.map(produit => produit._id);

      // Find all commandes related to the found products and group by year
      const commandesCountByYear = await commande.aggregate([
          {
              $match: {
                  produits: { $in: productIds } // Match commandes that include the products
              }
          },
          {
              $group: {
                  _id: { $year: "$createdAt" }, // Group by the year of the dateCommande
                  count: { $sum: 1 } // Count the number of commandes per year
              }
          },
          {
              $sort: { "_id": 1 } // Sort by year in ascending order
          }
      ]);

      // If no commandes are found
      if (!commandesCountByYear || commandesCountByYear.length === 0) {
          return res.status(404).json({ message: "No commandes found for this user's products" });
      }

      // Return the commandes count by year
      res.status(200).json({ commandesCountByYear });
  } catch (error) {
      console.error("Error fetching commandes:", error);
      res.status(500).json({ message: "An error occurred while fetching commandes" });
  }
});



module.exports = route