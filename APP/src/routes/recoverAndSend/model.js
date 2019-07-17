import BaseLayout from '@/components/Layouts/BaseLayout'
import send from '@/components/send'
import recover from '@/components/recover'
 
export default {
    name: 'app',
    components: {
      send,
      recover,
      BaseLayout
    },
    data() {
      return { 
        userChoice: "",
        showComponent1: false,
        showComponent2: false
      }
  },
  methods: {
    showComponent () {
      if (this.userChoice == 'recover'){
        this.showComponent2 = true;
        this.showComponent1 = false;
      } else if (this.userChoice == 'send'){
        this.showComponent1 = true;
        this.showComponent2 = false;
      }
    },
    previous (){
      this.showComponent1 = false;
      this.showComponent2 = false;
    }
  }
}