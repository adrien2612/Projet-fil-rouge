import io from 'socket.io-client'

export default {
    data() {
        return { 
            robotIsHere: "",
            socket: io('http://192.168.43.201:3000'), 
            distanceTodo: "0",
            trunkState: 'closed'
        }
    },
    methods: {        
        validateIt (){
            if (this.robotIsHere == 'yes') {
                this.showIt = 1;
            } else if (this.robotIsHere == 'no') {
                this.showIt = 2;
            }
        },
        openTrunk (){
            this.trunkState = 'open';
        },
        closeTrunk (){
            this.trunkState = 'closed';
        }
    },
    created (){
            console.log('on created !')
            this.socket.on('connect', () => {
                console.log('on connection !')
                this.socket.on('/api/robot/receive', (res) =>{
                    console.log('/api/robot/receive', res)
                    console.log(res)
                })
            })
    }
}