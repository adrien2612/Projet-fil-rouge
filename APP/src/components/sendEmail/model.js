export default {
    data() {
        return { 
            destinataire: "",
            message: ""
        }
    },
    methods: {
        sendEmail (){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "lericain6444@gmail.com",
                Password : "Atlantes6!",
                To : this.destinataire,
                From : "hermestia1@gmail.com",
                Subject : "Client mail for Hermestia",
                Body : "<div>" + this.message + "</div>",
            })

        }
    }
}