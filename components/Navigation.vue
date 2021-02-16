<template>
	<nav>
		<n-link to="/"><h1>lutoma</h1></n-link>

		<div class="nav-center">
			<ul>
				<li><n-link to="/photos">Photography</n-link></li>
				<li><n-link to="/contact">Contact</n-link></li>
			</ul>
		</div>

		<ul class="social">
			<li><a href="https://github.com/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'github']" /></a></li>
			<li><a href="https://twitter.com/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'twitter']" /></a></li>
			<li><a href="https://instagram.com/lutoma123" rel="noopener" target="_blank"><fa :icon="['fab', 'instagram']" /></a></li>
			<li><a href="https://500px.com/p/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', '500px']" /></a></li>
			<li><a href="https://chaos.social/@lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'mastodon']" /></a></li>
		</ul>
	</nav>
</template>

<style lang="scss">
nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;

	width: 100vw;
	min-height: 60px;
	background: white;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 20px;

	h1 {
		font-weight: 300;
		margin: 0;
		color: black;
		text-decoration: none;
	}

	.nav-center {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		justify-self: center;
		display: flex;
		flex-direction: row;
		list-style-type: none;
		padding: 0;
		margin: 0;

		li {
			margin-right: 25px;
			font-weight: 600;
		}
	}

	.social {
		a {
			color: black;
		}
	}
}
</style>
