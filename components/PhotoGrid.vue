<template>
	<div>
		<CoolLightBox :items="lightboxPhotos" :index="index" @close="index = null" :slideshow="false" />

		<div class="photo-grid">
			<no-ssr>
				<vue-masonry-wall :items="gridPhotos" :options="{padding: 1.5}">
					<template v-slot:default="{item}">
						<div class="item">
							<img :src="`${$axios.defaults.baseURL}${item.photo.formats.small.url}`" @click="index = item.lightbox_index" />
						</div>
					</template>
				</vue-masonry-wall>
			</no-ssr>
		</div>
	</div>
</template>

<style lang='scss'>
.photo-grid {
	padding: 0 2px;
	margin-top: 4rem;
	background: black;

	.item {
		overflow: hidden;
		width: 100%;
	}

	img {
		cursor: zoom-in;
		object-fit: cover;
		width: 100%;
		height: 100%;
		line-height: 0;
		display: block;
	}
}

.cool-lightbox {
	backdrop-filter: blur(6px);
}
</style>

<script>
import VueMasonryWall from 'vue-masonry-wall'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	components: {
		VueMasonryWall,
		CoolLightBox
	},

	props: {
		photos: { type: Array, default: [] },
	},

	/*
	@append="append"
	methods: {
		append() {
		}
	},
	*/

	data() {
		let gridPhotos = this.$props.photos;
		let lightboxPhotos = [];

		gridPhotos.forEach((item, i) => {
			gridPhotos[i].lightbox_index = i;
			lightboxPhotos.push({
				src: `${this.$axios.defaults.baseURL}${item.photo.url}`,
				title: item.title,
				description: item.description,
				thumb: `${this.$axios.defaults.baseURL}${item.photo.formats.small.url}`,
			})
		})

		return {
			index: null,
			gridPhotos,
			lightboxPhotos
		};
	},
}
</script>
