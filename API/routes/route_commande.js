module.exports = function(io, client){
    var Commandes = require('../models').Commandes

    client.on('/api/commande/create', function(create, res){
        console.log('/api/commande/create', create)
        var createdcommande = new Commandes(create).save((error, com ,data) => {
            if(error){
                res({error: error.message})
            }
            else {
                res({com: com})
                io.emit('/api/commande/create/done')
                //io.emit('/api/commande/create/done', {com: com})
            }
        })
    })

    client.on('/api/commande/get', function(filter, res){
        Commandes.find(filter, (error, coms) => {
            if(error){
                res({error: error.message})
            }
            else {
                res({coms: coms})
                io.emit('/api/commande/get/done', {coms: coms})
            }
        })
    })

    client.on('/api/commande/update', function(filter, update, res){

        Commandes.updateMany(filter, update, {}, (error, coms) => {
            if(error){
                res({error: error.message})
            }
            else {
                res({coms: coms})
                io.emit('/api/commande/update/done', {coms: coms})
            }
        })
    })


    client.on('/api/commande/delete', function(filter, res){

        Commandes.deleteMany(filter, (error, coms) => {
            if(error){
                res({error: error.message})
            }
            else {
                res({coms: coms})
                io.emit('/api/commande/delete/done', {coms: coms})
            }
        })
    })


}