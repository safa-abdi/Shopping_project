const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    dateCommande : {
        type : String,
        defaut:Date.now()
    },
    adresse:{
        type:String,
        required:true
        
    },
    nom:{
      type:String,
      required:true
      
  },
  prenom:{
    type:String,
    required:true
    
},
Num_tel:{
  type:Number,
  required:true
  
},
email:{
  type:String,
  required:true
  
},
city:{
  type:String,
  required:true
  
},

    quantité:{
        type:Number,
        required:true
    },
  EtatCommande:{
    type:String,
    enum:["En_cours",  "envoyee"],
    default:"En_cours"

  },
 
 
   produits : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "produit" 
   },
   createdAt:{
    type:Date,
    default:Date.now()
   }
})

const commande = mongoose.model('commande', schema);

module.exports = commande;