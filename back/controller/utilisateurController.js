const utilisateur = require('../models/utilisateur');
const bcrypt = require('bcryptjs');
const validator = require('validator');

exports.create = async (req, res) => {
    try {
      const { nom, prenom, email, motDePasse, tel } = req.body;
      
      if (!nom || !prenom || !email || !motDePasse || !tel) {
        return res.status(400).send({ message: 'Tous les champs sont requis' });
      }
  
      const newUser = new utilisateur({
        nom,
        prenom,
        email,
        motDePasse,
        tel
      });
  
      // Sauvegarde dans la base de données
      await newUser.save();
  
      res.status(200).send({
        msg: 'enregistrer avec succes',
        user: newUser
      });
    } catch (error) {
      res.status(500).send({
        message: `Erreur de base de données: ${error.message}`
      });
    }
  };
  
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        utilisateur.findById(id)
            .then(data => {
                if (!data) {
                    return res.status(404).send({ message: `Utilisateur non trouvé avec l'ID ${id}` });
                }
                res.send(data);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération de l'utilisateur:", err);
                res.status(500).send({ message: "Erreur lors de la récupération de l'utilisateur avec l'ID " + id });
            });
    } else {
        utilisateur.find()
            .populate({
                path: "_id",
                select: "-motDePasse"
            })
            .select('-motDePasse')
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération des utilisateurs:", err);
                res.status(500).send({ message: err.message || "Une erreur est survenue lors de la récupération des utilisateurs" });
            });
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Les données à mettre à jour ne peuvent pas être vides" });
    }

    const id = req.params.id;
    console.log("ID à mettre à jour:", id);
    console.log("Données reçues:", req.body);

    utilisateur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: `Impossible de mettre à jour l'utilisateur avec l'ID ${id}. L'utilisateur n'a peut-être pas été trouvé.` });
            }
            console.log("Utilisateur mis à jour:", data);
            res.send(data);
        })
        .catch(err => {
            console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
            res.status(500).send({ message: "Erreur lors de la mise à jour des informations utilisateur" });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    utilisateur.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: `Impossible de supprimer l'utilisateur avec l'ID ${id}. L'ID peut être incorrect` });
            }
            res.send({
                message: "L'utilisateur a été supprimé avec succès!"
            });
        })
        .catch(err => {
            console.error("Erreur lors de la suppression de l'utilisateur:", err);
            res.status(500).send({
                message: "Erreur lors de la suppression de l'utilisateur avec l'ID=" + id
            });
        });
};
