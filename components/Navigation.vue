<template>
	<nav v-click-outside="closeMobileMenu">
		<div class="mobile-visible">
			<n-link to="/" v-on:click.native="scrollToTop"><h1>lutoma</h1></n-link>

			<div :class="{'burger-button': true, open: showMobileMenu}" v-on:click="toggleMobileMenu">☰</div>
		</div>

		<div :class="{'nav-content': true, 'nav-content-show-mobile': showMobileMenu}">
			<div class="nav-center">
				<ul>
					<li><n-link to="/photos" v-on:click.native="closeMobileMenu">Photography</n-link></li>
					<li><n-link to="/code" v-on:click.native="closeMobileMenu">Code</n-link></li>
					<li><n-link to="/contact" v-on:click.native="closeMobileMenu">Contact</n-link></li>
				</ul>
			</div>

			<div class="social">
				<ul>
					<li><a href="https://github.com/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'github']" /></a></li>
					<li><a href="https://twitter.com/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'twitter']" /></a></li>
					<li><a href="https://instagram.com/lutoma123" rel="noopener" target="_blank"><fa :icon="['fab', 'instagram']" /></a></li>
					<li><a href="https://500px.com/p/lutoma" rel="noopener" target="_blank"><fa :icon="['fab', '500px']" /></a></li>
					<li><a href="https://chaos.social/@lutoma" rel="noopener" target="_blank"><fa :icon="['fab', 'mastodon']" /></a></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
	directives: {
		clickOutside: vClickOutside.directive
	},
	data() {
		return {
			showMobileMenu: false
		}
	},
	methods: {
		scrollToTop() {
			window.scroll({top: 0, left: 0, behavior: 'smooth'})
		},
		toggleMobileMenu(ev) {
			this.showMobileMenu = !this.showMobileMenu
		},
		closeMobileMenu(ev) {
			this.showMobileMenu = false
		}
	}
}
</script>

<style lang="scss">
$collapse-size: 700px;

nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;

	width: 100vw;
	min-height: 60px;
	background: black;
	color: white;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	padding: 0 20px;

	@supports (backdrop-filter: blur(10px)) {
		background: rgba(0, 0, 0, 0.85);
		backdrop-filter: blur(10px);
	}

	@media screen and (max-width: $collapse-size) {
		padding: 0 10px;
	}

	.mobile-visible {
		display: flex;
		flex-direction: row;
		min-height: 60px;
		align-items: center;

		@media screen and (max-width: $collapse-size) {
			flex-basis: 100%;
		}
	}


	h1 {
		font-weight: 300;
		margin: 0;
		color: white;
		text-decoration: none;
	}

	.burger-button {
		display: none;
		border: 0;
		background: transparent;
		font-size: 1.5rem;
		padding-left: 30px;
		flex-grow: 1;
		text-align: right;
		cursor: pointer;

		&.open {
			color: #2683E4;
		}

		@media screen and (max-width: $collapse-size) {
			display: block;
		}
	}

	.nav-content {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		align-items: center;

		@media screen and (max-width: $collapse-size) {
			display: none;
			padding-top: 1rem;
			padding-bottom: .5rem;
			flex-wrap: wrap;
			border-top: 1px solid #fff;
		}


		&.nav-content-show-mobile {
			display: flex;
		}

		.nav-center {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: center;

			@media screen and (max-width: $collapse-size) {
				flex-basis: 100%;

				ul {
					flex-direction: column;
					align-items: center;
					font-size: 1.3rem;

					li {
						padding-bottom: .5rem;
					}
				}
			}
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
				margin-bottom: 0;
			}
		}

		.social {
			a {
				color: white;
			}

			@media screen and (max-width: $collapse-size) {
				flex-basis: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-top: 1rem;
			}
		}
	}
}
</style>
