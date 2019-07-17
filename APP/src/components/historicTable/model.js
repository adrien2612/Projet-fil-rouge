import io from 'socket.io-client'

export default {
    data() {
        return { 
            emetteur: "",
            destinataire: "",
            counter: 0,
            time: 0,
            socket: io('http://localhost:3000'),
        }        
    },
    props: ['sequence', 'missions'],
    methods: {
    },
}