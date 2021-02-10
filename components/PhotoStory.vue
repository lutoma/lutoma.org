<template>
	<div class="photo-story">
		<figure class="photo-wrapper" v-for="item of photos" :key="item.id" :id="`p${item.id}`">
			<img v-lazy="`https://api.lutoma.org${ item.photo.url }`" :alt="item.description" />
			<figcaption v-if="item.description">{{ item.description }}</figcaption>
		</figure>
	</div>
</template>

<style lang='scss'>
.photo-story {
	padding: 0 10vw;

	&, & figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	figure {
		width: 80vw;
		padding-top: 4rem;
		padding-bottom: 1rem;

		img {
			width: auto;
			max-height: 80vh;
			max-width: 100%;
			border: 1px solid #000;
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
}
</script>
