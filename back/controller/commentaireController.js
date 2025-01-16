var commentairedb = require('../models/commentaires');
var utilisateurs=require('../models/utilisateur')



var design=require('../models/design')


exports.create = async (req, res) => {
    if (!req.body || !req.body.comment || !req.body.produit || !req.body.emetteur || !req.body.date) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }

    try {
        const commentaire = new commentairedb({
            comment: req.body.comment,
            produit: req.body.produit,
            emetteur: req.body.emetteur,
            date: req.body.date,
            utilisateur: req.body.utilisateur,
            design: req.body.design
        });

        await utilisateurs.updateOne(
            { _id: req.body.utilisateur },
            { $addToSet: { commentaires: commentaire._id } },
            { new: true }
        );

        await design.updateOne(
            { _id: req.body.design },
            { $addToSet: { commentairess: commentaire._id } },
            { new: true }
        );

        const savedCommentaire = await commentaire.save();
        return res.status(200).send({
            Commentaire: savedCommentaire,
            msg: "Enregistré avec succès"
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la création du commentaire"
        });
    }
};



//api find all comments
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        commentairedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found comment with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        commentairedb.find()
            .then(comment => {
                res.send(comment)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving comment information" })
            })
    }

    
}


//update comment
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty" });
    }

    const id = req.params.id;
    // Utilisez { new: true } pour renvoyer l'objet mis à jour
    commentairedb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: `Cannot update comment with ID ${id}. Maybe comment not found!` });
            }
            // Assurez-vous que le message et les données sont renvoyés
            return res.status(200).send(data); 
        })
        .catch(err => {
            return res.status(500).send({ message: "Error updating comment information" });
        });
};



//delete commentaire
exports.delete = (req, res)=>{
    const id = req.params.id;

    commentairedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "comment was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete comment with id=" + id
            });
        });
}

