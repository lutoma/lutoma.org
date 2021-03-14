export default {
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
	],

	loading: { color: '#fff' },

	script: [

	],

	plugins: [
		'~/plugins/vue-lazyload.js',
	],

	components: true,

	buildModules: [
	],

	modules: [
		'@nuxtjs/axios',
	],

	buildModules: [
		'@nuxtjs/fontawesome',
	],

	build: {
	},

	axios: {
		baseURL: 'https://api.lutoma.org',
	},

	fontawesome: {
		component: 'fa',
		proIcons: {
			regular: [
				'faSpinnerThird',
				'faLock',
			],
			light: [
				'faMapMarkedAlt',
				'faFileContract',
			]
		},

		icons: {
			brands: [
				'faGithub',
				'faMastodon',
				'faTwitter',
				'faLastfm',
				'faInstagram',
				'fa500px',
			]
		}
	}
}
