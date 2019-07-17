import BaseLayout from '@/components/Layouts/BaseLayout'

export default {
	components: {
		BaseLayout
	},
	data () {
		return {
		}
	},
	methods: {
		// Cette fonction permet juste de transférer l'utilisateur sur la page de connexion
		search (){
			this.$router.push('/home/')			
		},
	},
	// On détruit tout ce qui était enregistré dans la session (Voir Components/connexion)
	created() {
		this.$session.destroy()
		this.search()
	},	 
}
