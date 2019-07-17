import io from 'socket.io-client'

export default {
    data() {
        return { 
            emetteur: "",
            destinataire: "",
            poid: "",
            importance: "",
            description: "",
            myRange: "",
            distance: "",
            socket: io('http://192.168.43.201:3000'),
            calibrationDone: false,
            showHelp: false
        }
    },
    methods: {
        startCalibration(){
            this.socket.emit('/api/robot/send', 'a') 
            this.socket.on('/api/robot/receive', (res) =>{ 
                let yes = res
                console.log('yes' + yes) 
                if(yes == 'y'){
                    this.calibrationDone = true; 
                }   
            })
        },
        send () {
            console.log(this.distance)
            this.socket.emit('/api/commande/create', {emetteur: this.emetteur, recepteur: this.destinataire, poids: this.poid, importance: this.importance, description: this.description, distance: this.distance}, (res) => {
                if(res.error){
                    console.log(res.error)
                }
                if(res.com){  
                    console.log(res.com)
                    this.socket.emit('/api/robot/send', 'b ')
                    this.socket.emit('/api/robot/send', this.distance)
                    this.$router.push('/recoverAndSend/')
                }
            })
        },
        ShowHelp() {
            this.showHelp = true;
        },
        dontShowHelp() {
            this.showHelp = false;
        }
        // Réaliser fonction pour envoyer un petit mail ou une petite alerte à l'utilisateur pour qu'il soit informé quand le robot lui sera envoyé. 
    },
    created () {
        console.log('on created !')
        this.socket.on('connect', () => {
            console.log('on connection !')
            this.socket.on('/api/robot/receive', (res) =>{
                console.log('/api/robot/receive', res)
            })
        })
    },
}