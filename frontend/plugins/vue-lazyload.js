import { defineNuxtPlugin } from '#app'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueLazyload, {
	preLoad: 2,
	observer: true,
	adapter: {
		loaded({el}) {
			const srcSet = el.attributes['data-srcset']

			if(srcSet) {
				el.setAttribute('srcSet', srcSet.value)
			}
		},
	}
	})
})
