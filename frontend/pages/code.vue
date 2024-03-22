<template>
	<div class="code">
		<h1>Code</h1>
		<div class="project">
			<h2>Xelix</h2>
			<ul class="languages">
				<li>C</li>
				<li>x86 Assembly</li>
			</ul>

			<ul class="links">
				<li><a href="https://github.com/lutoma/xelix" rel="nofollow noopener" target="_blank"><fa :icon="['fab', 'github']" /> Github</a></li>
				<li><a href="https://xelix.org" rel="noopener" target="_blank"><fa :icon="['far', 'book']" /> Docs</a></li>
			</ul>

			<a :href="xelix_screenshot" target="_blank"><img :src="xelix_screenshot" /></a>

			<p>Xelix is a hobby POSIX-like kernel and operating system for x86. It is written in C, has a largely GNU-based userland and can run many common *nix programs.</p>
			<p>Features include:</p>
			<ul>
				<li>Preemptive multitasking with privilege and memory separation</li>
				<li>POSIX process API with fork/execve/wait and signal handling</li>
				<li>VFS with support for dynamic mount points, poll, pipes, and in-memory file trees</li>
				<li>Read/write ext2 implementation, IDE and virtio-block drivers</li>
				<li>A userland graphics compositor and window manager using Cairo and freetype2</li>
				<li>BSD socket API for TCP/IP support using the <a href="https://picotcp.altran.be/" rel="nofollow noopener" target="_blank">PicoTCP</a> network stack</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import xelix_screenshot from "~/assets/xelix.png";
</script>

<script>
export default {
	head () {
		const title = 'Code — lutoma'
		const meta = [
			{ hid: 'og:title', property: 'og:title', content: title },
			{ hid: 'twitter:title', name: 'twitter:title', content: title },
		]

		return { title, meta }
	}
}
</script>

<style lang="scss">
.code {
	.project {
		margin-bottom: 2rem;

		// Might want to replace clearfix with flexbox
		&::after {
			content: "";
			clear: both;
			display: table;
		}
	}

	.languages, .links {
		list-style-type: none;
		padding: 0;
		display: inline-block;
		margin-top: .5rem;
		margin-bottom: 1rem;

		@media screen and (max-width: 800px) {
			display: block;
			margin-bottom: .5rem;
		}

		li {
			display: inline-block;
			margin-right: .2rem;
		}
	}

	.languages {
		li {
			padding: 2px 8px;

			background: black;
			border-radius: 1rem;

			color: white;

			-weight: bold;
			font-size: .9rem;
		}
	}

	.links {
		list-style-type: none;
		margin-left: 1rem;

		@media screen and (max-width: 800px) {
			margin-left: 0;
			margin-bottom: 1rem;
		}

		li {
			margin-right: 1rem;
		}
	}

	img {
		float: right;
		max-width: 200px;
		max-width: m#{i}n(50vw, 800px);
		padding-left: 3rem;
		padding-bottom: 3rem;

		@media screen and (max-width: 1024px) {
			float: none;
			padding-left: 0;
			padding-bottom: 2rem;
			max-width: 100%;
		}
	}
}
</style>
