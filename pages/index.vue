<template>
	<div class="index">
		<div class="intro">
			<h1>Hello, I'm<br />Lukas&nbsp;Martini.</h1><br />
		</div>
		<PhotoGrid v-if="album" :photos="album.photos" />
	</div>
</template>


<script>
import PhotoGrid from '~/components/PhotoGrid.vue'

export default {
	name: 'Index',
	layout: 'full-width',

	components: {
		PhotoGrid,
	},

	async asyncData({ route, error, $axios, app }) {
		const api_path = `/albums?_limit=1&slug=portfolio`
		const albums = await $axios.$get(api_path).catch((e) => {
			return {}
		})

		if(albums.length < 1) {
			return {}
		}

		return { album: albums[0] }
	},
}
</script>

<style lang='scss'>
.index {
	.intro {
		position: absolute;
		margin-top: 3.5rem;
		margin-left: 3.5rem;
		border: 1px solid #000;
		background: white;
		padding: 10px 20px;

		h1 {
			display: inline-block;
			font-size: 3rem;
			margin: 0;
		}
	}

	.photo-grid {
		// FIXME Should do that in a less hacky way
		margin-top: 0 !important;
	}
}
</style>
