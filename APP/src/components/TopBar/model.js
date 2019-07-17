import NavMenu from '@/components/NavMenu'
import NavMenuSession from '@/components/NavMenuSession' 
import LanguageSelector from '@/components/LanguageSelector'

var $ = document.$

export default {
  components: {
    NavMenu,
    LanguageSelector,
    NavMenuSession
  },
  data () {
    return {
      auth: this.$session.exists()
    }
  },
  mounted () {
    //console.log($.HSCore)
    //$.HSCore.helpers.HSHamburgers.init('.hamburger')   
  }
}
