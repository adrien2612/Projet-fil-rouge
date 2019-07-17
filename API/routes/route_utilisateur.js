module.exports = function(io, client){
    var Utilisateur = require('../models').Utilisateur

    // client.emit('/api/user/create', {nom:'Adrien', email:'a.e@fs'}, (res) => {
    //    if(res.error){
     //       console.log(res.error)
     //   }
      //  if(res.user){
      //
      //  }
    //    
    //})
    // client.on('/api/user/create/done', () => {
//
  //  })
    client.on('/api/utilisateur/create', function(create, res){
             console.log('/api/utilisateur/create')
             var createdUser = new Utilisateur(create).save((error, user) => {
                 if(error){
                    console.log('aaa');
                     res({error: error.message})
                     console.log('a');
                 }
                 else {
                     console.log('aaa');
                     res({user: user})
                     io.emit('/api/utilisateur/create/done', {user: user})
                 }
             })
    })
    
    // client.emit('/api/user/get', {name:'Adrien', age: {'$gte': 18}}, (res) => {
    //    if(res.error){
     //       console.log(res.error)
     //   }
      //  if(res.user){
      //    
      //  }
    //    
    //})
    client.on('/api/utilisateur/get', function(filter, res){
             Utilisateur.find(filter, (error, users) => {
                 if(error){
                    console.log('er')
                     res({error: error.message})
                 }
                 else {
                     console.log('si')
                     res({users: users})
                     io.emit('/api/utilisateur/get/done', {users: users})
                 }
             })
    })

    // client.emit('/api/user/update', {name:'Adrien', age: {'$gte': 18}}, {age: 19}, (res) => {
    //    if(res.error){
     //       console.log(res.error)
     //   }
      //  if(res.user){
      //    
      //  }
    //    
    //})
    client.on('/api/utilisateur/update', function(filter, update, res){

             Utilisateur.updateMany(filter, update, {}, (error, users) => {
                 if(error){
                     res({error: error.message})
                 }
                 else {
                     res({users: users})
                     io.emit('/api/utilisateur/update/done', {user: user})
                 }
             })
    })
        // client.emit('/api/user/delete', {name:'Adrien', age: {'$gte': 18}}, (res) => {
    //    if(res.error){
     //       console.log(res.error)
     //   }
      //  if(res.user){
      //    
      //  }
    //    
    //})
    client.on('/api/utilisateur/delete', function(filter, res){

        Utilisateur.deleteMany(filter, (error, users) => {
            if(error){
                res({error: error.message})
            }
            else {
                res({users: users})
                io.emit('/api/utilisateur/delete/done', {user: user})
            }
        })
})
}