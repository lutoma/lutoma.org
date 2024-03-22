<template>
	<div>
		<Navigation />
		<div class="main-container">
			<slot />
		</div>
	</div>
</template>


<script>
import Navigation from '~/components/Navigation'

export default {
	components: {
		Navigation
	}
}
</script>

<style lang='scss'>
@import "~/assets/main.scss";

.main-container {
	padding: 3rem 10vw;

	@media screen and (max-width: 1366px) {
		padding: 3rem 5vw;
	}

	@media screen and (max-width: 800px) {
		padding: 2rem 1.5rem;
	}
}
</style>

