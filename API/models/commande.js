var mongoose = require('mongoose');


var CommandesSchema =new mongoose.Schema({
    emetteur: {
        type: String,
        required:  true
    },  
    recepteur:{
        type: String,
        required:  true
    },  
    etat:String,
    temps:Number,
    position:String, 
    description: String, 
    poids: Number,
    importance: String,
    distance: String
});
var Commandes = mongoose.model('Commandes', CommandesSchema)
module.exports = Commandes;