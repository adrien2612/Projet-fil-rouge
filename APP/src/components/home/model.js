import io from 'socket.io-client'

export default {
    name: 'Login',
    data() {
        return { 
            input: {
                email: "",
                password: ""
            },
            socket: io('http://localhost:3000')
        }
    },
    props: ['connected'],
    methods: {
        // Cette fonction va appeler d'autres fonctions, en gros elle permet de vérifier par des appels de différentes API que l'adresse mail et le mdp saisie 
        // sont bien présentes dans la BDD et sont associé. On  vérifie également si l'utilisateur a confirmé son adresse mail ou pas.
        login() {
            this.socket.emit('/api/utilisateur/get', {email: this.input.email, password: this.input.password}, (res) => {
            if(res.error){
                console.log(res.error)
            }
            if(res.users){  
                console.log(res.users[0].nom)
                this.setSession(res.users)          
            }              
            })
        },
        setSession (result){
            this.$session.destroy()
            this.$session.start()               
            this.$session.set('id', result[0].id)   
            this.$router.push('/recoverAndSend/')   
        },

    },
        created() {
            if (this.$session.get('email')){
                this.input.email = this.$session.get('email')
                console.log(this.input.email)
            }
        }
    
}