export default defineNuxtConfig({
	$production: {
		head: {
			title: 'lutoma',
			htmlAttrs: {
				lang: 'en'
			},

			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'og:site_name', property: 'og:site_name', content: 'lutoma' },
				{ name: 'apple-mobile-web-app-title', content: 'lutoma' },
				{ name: 'application-name', content: 'lutoma' },
				{ name: 'msapplication-TileColor', content: '#000000' },
				{ name: 'theme-color', content: '#000000' }
			],

			link: [
	//			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		},

		css: [
			'@fortawesome/fontawesome-svg-core/styles.css'
		],

		build: {
			transpile: [
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-brands-svg-icons',
				'@fortawesome/pro-light-svg-icons',
				'@fortawesome/pro-regular-svg-icons',
				'@fortawesome/vue-fontawesome',
			]
		},

		loading: { color: '#fff' },

		plugins: [
			'~/plugins/vue-lazyload.js',
			'~/plugins/fontawesome.js',
//			{ src: '~/plugins/matomo.js', mode: 'client' }
		],
	}
})
