import io from 'socket.io-client'

export default {
    name: 'Subscription',
    data() {
        return {
            //Used in model.js
            Email: "",
            userName: "",
            secretKey: "",
            user: [],
            //Used in view.html
            //Used in both html and js        
            profession: "",
            lastName: "",
            mail: "",
            password1: "",
            password2: "",
            checkmail: 0,  
            profession: "",
            socket: io('http://localhost:3000')
        }
    },
    methods: {
        // ici on vérifie que les mots de passe saisies sont bien identique sinon on retourne une erreur à l'utilisateur 
        // et on vérifie que tous les champs ont été saisie correctement ainsi que l'adresse mail est disponible
        subscribe() {
            this.$validator
            .validateAll()
            .then(function(response) {
              // Validation success if response === true
            })
            .catch(function(e) {
              // Catch errors
            })
            this.checkUser(this.mail)
            },
    // Cette fonction permet d'enregistré le nouvel utilisateur dans la BDD user et de lui envoyer un mail pour vérifier son adresse mail
    createUser() {
        console.log(this.lastName, this.profession)
        this.socket.emit('/api/utilisateur/create', {nom: this.lastName, profession: this.profession, email: this.mail, password: this.password1}, (res) => {
            if(res.error){
                console.log(res.error)
            }
            if(res.user){  
                console.log(res.user)    
                this.$router.push('/Home/')        
            }              
            })
        },
        checkUser (mail) {
            this.socket.emit('/api/utilisateur/get', {email: mail}, (res) => {
                if(res.error){
                    console.log(res.error)
                }        
                if (res.users != 0) {
                    this.checkmail = 1;
                } else {
                    this.setSession(mail)
                    }
            })
        },
    setSession (mail){
        this.$session.start()
        this.$session.set('email', mail)   
        this.createUser()                  
    },
}
}
