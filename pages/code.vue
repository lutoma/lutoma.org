<template>
	<div>
		<h1>Code</h1>
		<div class="project">
			<h2>Xelix</h2>
			<a :href="require('~/assets/xelix.png')" target="_blank"><img src="~assets/xelix.png" /></a>

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

			<ul class="links">
				<li><a href="https://xelix.org" rel="noopener" target="_blank">Project homepage &amp; documentation</a></li>
				<li><a href="https://github.com/lutoma/xelix" rel="nofollow noopener" target="_blank"><fa :icon="['fab', 'github']" /> Github</a></li>
			</ul>
		</div>

		<div class="project">
			<h2>Undercurrent</h2>
			<a :href="require('~/assets/undercurrent.png')" target="_blank"><img src="~assets/undercurrent.png" /></a>

			<p>Undercurrent is a pre-alpha GTK3 Linux client for the TIDAL music streaming service. It is written in Python using PyGObject with GTK and GStreamer.</p>

			<ul class="links">
				<li><a href="https://github.com/lutoma/undercurrent" rel="nofollow noopener" target="_blank"><fa :icon="['fab', 'github']" /> Github</a></li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
.project {
	margin-bottom: 2rem;

	// Might want to replace clearfix with flexbox
	&::after {
		content: "";
		clear: both;
		display: table;
	}
}

.links {
	margin-top: 2rem;
	list-style-type: none;
	padding: 0;

	li {
		margin-bottom: 10px;
	}
}

img {
	float: right;
	max-height: 500px;
	max-width: 50vw;
	padding-left: 30px;
	padding-bottom: 30px;

	@media screen and (max-width: 1024px) {
		float: none;
		padding-left: 0;
		max-width: 100%;
	}
}
</style>
