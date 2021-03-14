<template>
	<div>
		<h1>Photography</h1>

		<template v-for="group of alist.group">
			<h2 v-if="group.title">{{ group.title }}</h2>

			<ul class="album-list">
				<li v-for="item of group.entries" :key="item.id">
					<n-link :to="`/photos/${item.album.slug}`">
						<div v-if="item.preview" :style="{backgroundImage: `url(https://api.lutoma.org${item.preview.formats.medium.url})`}">{{ item.album.title }}</div>
						<div v-if="!item.preview">{{ item.album.title }}</div>
					</n-link>
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
export default {
	async asyncData({ route, error, $axios, app }) {
		const api_path = `/album-overview`
		const alist = await $axios.$get(api_path).catch((e) => {
			error({ statusCode: 500, message: 'Error while processing your request' })
			return {}
		})

		return { alist }
	},

	head () {
		const title = 'Photography — lutoma'
		const meta = [
			{ hid: 'og:title', property: 'og:title', content: title },
			{ hid: 'twitter:title', name: 'twitter:title', content: title },
		]

		return { title, meta }
	}
}
</script>

<style lang='scss'>
.album-list {
	display: flex;
	flex-wrap: wrap;

	list-style-type: none;
	padding: 0;
	margin-top: 2rem;
	margin-bottom: 2rem;

	li {
		margin-right: 35px;
		margin-bottom: 35px;

		@media screen and (max-width: 800px) {
			width :100%;
			margin-right: 0;
		}
	}

	div {
		height: 300px;
		width: 300px;

		padding: 10px 20px;

		border: 1px solid #000;
		box-shadow: 12px 12px 2px 1px rgba(#2683E4, .2);

		background-color: #444;
		background-size: cover;
		background-position: center;

		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		text-align: right;

		color: white;

		font-family: "Rubik", "Fira Sans", sans-serif;
		font-weight: 300;
		font-style: italic;
		font-size: 1.8rem;

		@media screen and (min-width: 1024px) {
			max-width: 23vw;
			max-height: 23vw;
		}

		@media screen and (max-width: 800px) {
			width: 100%;
			height: 200px;
		}


		a {
			color: white;
		}
	}
}
</style>
