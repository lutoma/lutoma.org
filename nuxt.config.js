export default {
	head: {
		title: 'lutoma',
		htmlAttrs: {
			lang: 'en'
		},

		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
//			{ hid: 'description', name: 'description', content: '' }
		],

		link: [
//			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
	],

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
