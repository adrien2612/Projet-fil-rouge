var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/dbhermestia';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});
 
module.exports = db;

//var mongoose = require('mongoose');
//mongoose.set('bufferCommands', false);
module.exports.Commandes = require('./commande');
module.exports.Utilisateur = require('./utilisateur');

