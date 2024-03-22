<template>
	<div class="album">
		<h1 v-if="album.title">{{ album.title }}</h1>
		<div class="desc" v-if="album.description" v-html="description_html" />
		<ul class="meta" v-if="album.license || album.location">
			<li v-if="album.license == 'ccby'">
				<fa :icon="['fal', 'file-contract']" /> <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener" target="_blank">Creative Commons CC-BY 4.0</a>
			</li>
			<li v-if="album.location">
				<fa :icon="['fal', 'map-marked-alt']" /> <a :href="`https://www.openstreetmap.org/search?query=${album.location}`" rel="noopener" target="_blank">{{ album.location }}</a>
			</li>
		</ul>

		<PhotoGrid v-if="album.style == 'grid'" :photos="album.photos" />
		<PhotoStory v-if="album.style == 'story'" :photos="album.photos" />
	</div>
</template>

<script setup>
import { marked } from 'marked'
import PhotoGrid from '~/components/PhotoGrid'
import PhotoStory from '~/components/PhotoStory'

definePageMeta({
	layout: 'full-width',
});

const route = useRoute()
const { data } = await useFetch(`https://api.lutoma.org/albums?_limit=1&slug=${route.params.slug}`)

if(!data.value || !data.value.length) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Album Not Found'
	})
}

const album = data.value[0]
const description_html = album.description ? marked.parse(album.description) : ''

const title = `${album.title} — lutoma`
const meta = [
	{ hid: 'og:title', property: 'og:title', content: title },
	{ hid: 'twitter:title', name: 'twitter:title', content: title },
]


if(album.description) {
	meta.push(
		{ hid: 'description', name: 'description', content: album.description },
		{ hid: 'og:description', property: 'og:description', content: album.description },
		{ hid: 'twitter:description', name: 'twitter:description', content: album.description }
	)
}

if(album.photos.length >= 1) {
	const content = `https://api.lutoma.org${album.photos[0].photo.formats.large.url}`
	meta.push(
		{ hid: 'og:image', property: 'og:image', content },
		{ hid: 'twitter:image', name: 'twitter:image', content },
	)
}

useHead({ title, meta })
</script>

<style lang='scss'>
.album {
	width: 100%;

	h1, p, ul {
		text-align: center;
	}


	h1 {
		margin-top: 3rem;
		margin-bottom: 0;
	}

	p, ul {
		margin-top: 1rem;
	}

	.meta {
		margin-top: 1rem;
		font-weight: 300;
		list-style-type: none;
		padding-left: 0;

		li {
			display: inline;
			padding: 0 10px;

			a {
				color: #222;
			}
		}
	}
}
</style>
