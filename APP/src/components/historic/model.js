import historicTable from '@/components/historicTable'
import io from 'socket.io-client'

export default {
    components: {
        historicTable
    },
    data (){
        return {
            socket: io('http://localhost:3000'),
            missions: [{}]
        }
    },
    methods: {
    }, 
    created (){
        this.socket.emit('/api/commande/get', {}, (res) => {
        if(res.error){
            console.log(res.error)
        }
        if(res.coms){  
            console.log(res.coms)   
            this.missions = res.coms         
            console.log(this.missions)
        }
    })
    }
}