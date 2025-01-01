var utilisateur = require('../models/utilisateur')
const bcrypt = require("bcrypt");


// api ajout user
exports.create =   async (req, res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    // new user
    const user = new utilisateur({
        nom : req.body.nom,
        prenom : req.body.prenom,
        email:req.body.email,
        motDePasse:req.body.motDePasse,
        
        role:"Client",
        tel:req.body.tel
        
    })
    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await  bcrypt.hash(user.motDePasse, gensalt);
    user.motDePasse=hashedPassword;

    // save user in the database
   user
        .save(user)
        .then(data => {
            res.status(200).send({
                Commande: data,
                msg: "enregistrer avec succes",
              });
           
        })
        .catch(err =>{
            return res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });


       
        

}
 //api select all users
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        utilisateur.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found commande with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        utilisateur.find().populate(
            {
                path:"_id",
                select :"-motDePasse"
            }).select('-motDePasse')
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving comment information" })
            })
    }

    
}
//api update user
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
            } else {
                console.log("Utilisateur mis à jour:", data);
                res.send(data);
            }
        })
        .catch(err => {
            console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
            res.status(500).send({ message: "Erreur lors de la mise à jour des informations utilisateur" });
        });
};

//delete user
exports.delete = (req, res)=>{
    const id = req.params.id;

    utilisateur.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete user with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "user was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "user not delete comment with id=" + id
            });
        });
}



