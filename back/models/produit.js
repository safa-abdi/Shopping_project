const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  nomProduit:{
    type:String,
    required:true
  },
    type : {
        type : String,
        required:true
    },
    caracteristique:{
        type:String,
        
    },
    image:{
        type:String,
       
    },
    
  prix:{
    type:Number,
    //required:true
  },
 
  utilisateurr : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "utilisateur" 
   },
  
 
})

const produit = mongoose.model('produit', schema);

module.exports = produit;