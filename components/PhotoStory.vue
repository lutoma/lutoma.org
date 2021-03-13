<template>
	<div class="photo-story">
		<figure class="photo-wrapper" v-for="item of photos" :key="item.id" :id="`p${item.id}`">
			<img
				v-lazy="`https://api.lutoma.org${ item.photo.url }`"
				:data-srcset="buildSrcSet(item.photo)"
				:sizes="buildSizes(item.photo)"
				:alt="item.description"
				:style="`height: ${item.photo.height}px;`" />

			<figcaption v-if="item.description">{{ item.description }}</figcaption>
		</figure>
	</div>
</template>

<style lang='scss'>
.photo-story {
	padding: 0 10vw;


	@media screen and (max-width: 800px) {
		padding: 0 20px;
	}


	&, & figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	figure {
		width: 80vw;
		padding-top: 4rem;
		padding-bottom: 1rem;

		@media screen and (max-width: 800px) {
			width: 100%;
			padding-top: 1rem;

			&:nth-of-type(1) {
				padding-top: 3rem;
			}
		}

		img {
			width: 100%;
			height: 80vh;
			max-height: 80vh;
			max-width: 100%;
			border: 1px solid #000;
			aspect-ratio: attr(width) / attr(height);
		}

		img[lazy=loaded] {
			width: auto !important;
			height: auto !important;
		}

		figcaption {
			margin-top: 1.5rem;
			font-size: 1.1rem;
			font-weight: 300;
		}

	}
}
</style>

<script>
export default {
	components: {
	},

	props: {
		photos: { type: Array, default: [] },
	},

	methods: {
		buildSrcSet(photo) {
			let formats = Object.values(photo.formats)
			formats.sort((a, b) => a.width - b.width)

			let sources = []
			for(let fmt of Object.values(formats)) {
				sources.push(`https://api.lutoma.org${fmt.url} ${fmt.width}w`)
			}

			sources.push(`https://api.lutoma.org${photo.url} ${photo.width}w`)
			return sources.join(', ');
		},
		buildSizes(photo) {
			let formats = Object.values(photo.formats)
			formats.sort((a, b) => a.width - b.width)

			let sizes = []
			for(let fmt of Object.values(formats)) {
				sizes.push(`(max-width: ${fmt.width}px) ${fmt.width}w`)
			}

			sizes.push(`${photo.width}w`)
			return sizes.join(', ');
		}
	}
}
</script>
