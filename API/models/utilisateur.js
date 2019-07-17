var mongoose = require('mongoose');


var UtilisateurSchema =new mongoose.Schema({
    nom: String,
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String, 
        required:true
    },
    profession: String,
    commandes: [{type: mongoose.Schema.Types.ObjectId, ref:'Commandes'}]
});
var Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema)
module.exports = Utilisateur;
