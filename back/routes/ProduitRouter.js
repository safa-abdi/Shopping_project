
const express = require('express');
const route = express.Router()
const produit=require('../models/produit')
const storage=require('../middleware/upload');
const multer = require("multer");
const designn=require('../models/design')
var utilisateurs=require('../models/utilisateur')


var commandedb=require('../models/commande')
const controller = require('../controller/ProduitController')
route.delete('/api/deleteProduit/:id', controller.delete);
route.get('/api/SelectProduit', controller.find);
route.put('/api/updateProduit/:id', controller.update);

//api ajout produit
const upload = multer({
    storage: storage,
  });
  route.post("/registerProduit", upload.single("image"), async (req, res) => {
    const { nomProduit, type, caracteristique, prix } = req.body;
    
    try {
        console.log("Request body:", req.body); // Log the received form data
        console.log("Uploaded file:", req.file); // Log the file data
        
        const newProduit = new produit({
            nomProduit,
            type,
            caracteristique,
            prix,
            
        });

        // Handle image if uploaded
        if (req.file) {
            newProduit.image = "http://localhost:3000/uploads/" + req.file.filename;
        }

        newProduit.utilisateurr = req.body.utilisateurr;

        // Update utilisateur with new produit reference
        await utilisateurs.updateOne(
            { _id: req.body.utilisateurr },
            { $addToSet: { produits: newProduit._id } },
            { new: true }
        );

        // Save the new produit
        let result = await newProduit.save();

        res.status(200).send({
            produit: result,
            msg: "enregistrer avec succes",
        });
      
    } catch (error) {
        console.error("Error during product registration:", error); // Log the error
        res.status(400).send("Erreur lors de l'enregistrement du produit");
    }
});

route.get('/user/:id/produits-count', async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by their ID
    const utilisateur = await utilisateur.findById(userId).populate('produits');

    if (!utilisateur) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Count the number of products
    const produitsCount = utilisateur.produits.length;

    // Return the count
    res.json({ produitsCount });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});


  //api afficher produit selon type
  route.get('/getProduitParType/:type', async ( req, res)=>{

    try {
        
    const oneComt = await produit.find({ type:req.params.type}).populate("type")
    res.status(201).json(oneComt);
    
    } catch (error) {
      console.log(error.message);  
    }
    })

 //api afficher produit selon type
 route.get('/getProduitByUser/:utilisateurr', async ( req, res)=>{

  try {
      
  const oneComt = await produit.find({ utilisateurr:req.params.utilisateurr}).populate("utilisateurr")
  res.status(201).json(oneComt);
  
  } catch (error) {
    console.log(error.message);  
  }
  })
    //modifier un produit
    route.put("/mdf/:id", async (req, res) => {
      try {
        const id = req.params.id;
        let mdd = {
          statut: "confirme",
        };
        let aa = await produit.findByIdAndUpdate({ _id: id }, { ...mdd });
        res.status(200).send(mdd);
      } catch (error) {
        console.log(error);
        res.status(401).send(error);
      }
    });


    // afficher un produit selon leur nom
    route.get('/getProduitParNom/:nomProduit', async ( req, res)=>{

      try {
          
      const oneComt = await produit.find({ type:req.params.nomProduit}).populate("nomProduit")
      res.status(201).json(oneComt);
      
      } catch (error) {
        console.log(error.message);  
      }
      })
  // afficher un produit selon leur nom
  route.get('/getProduitParid/:id', async ( req, res)=>{

    try {
        
    const oneComt = await produit.find({ _id:req.params.id}).populate("nomProduit")
    res.status(201).json(oneComt);
    
    } catch (error) {
      console.log(error.message);  
    }
    })



      //chercher un produit
      // search client
route.get("/searchProduit/:key", async (req, resp) => {
  let data = await produit.find({
     
      "$or": [
          { nomProduit: { $regex: req.params.key } },


      ]
  })
  resp.send(data);
})

  module.exports = route