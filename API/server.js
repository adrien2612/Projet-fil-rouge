const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(cors({credentials: true, origin: 'http://0.0.0.0:8081'}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var http = require('http').Server(app);
var io = require('socket.io')(http);
io.set('origins', '*:*'); 



io.on('connection', (client) => {
    console.log(client.id, 'Connected')
    require('./routes/route_robot')(io, client)
    require('./routes/route_utilisateur')(io, client)
    require('./routes/route_commande')(io, client)
});
/*
io.on('Utilisateurs', (client) => {
    console.log(client.id, 'is connected')
    require('./routes/route_utilisateur')(io, client)
    require('./routes/route_commande')(io, client)
})*/

console.log("yep");    

/*
var mongoDB = 'mongodb://localhost:27017/dbhermestia'
mongoose.connect(mongoDB, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
});*/


const PORT = 3000
const HOST = '0.0.0.0'
http.listen(PORT, HOST, () => {
    console.log('api running on ', HOST, ':', PORT)
})





