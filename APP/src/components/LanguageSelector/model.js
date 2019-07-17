export default {
    data () {
        return {
            langs: { 'fr': 'français', 'eu': 'euskara', 'es': 'español', 'en': 'english'}
        }
    },
    methods: {
        // on récupère le choix de la langue que l'utilisateur aura sélectionné et on va mettre toutes les champs présent dans le fichier translations dans la bonne langue
        updateLanguage (language) {
            this.$i18n.locale = language;
            console.log(this.$i18n.locale)
        }                  
    }
  }
  