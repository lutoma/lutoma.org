// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faMastodon, faTwitter, faLastfm, faInstagram, fa500px } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faFileContract } from '@fortawesome/pro-light-svg-icons'
import { faLock, faSpinnerThird, faBook } from '@fortawesome/pro-regular-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faMapMarkedAlt, faFileContract, faLock, faSpinnerThird, faBook,
	faGithub, faMastodon, faTwitter, faLastfm, faInstagram, fa500px)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('fa', FontAwesomeIcon, {})
})
