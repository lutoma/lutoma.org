import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
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
