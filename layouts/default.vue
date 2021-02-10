<template>
	<div>
		<Navigation />
		<div class="main-container">
			<nuxt/>
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
@import "~assets/main.scss";

.main-container {
	padding: 3rem 10vw;
}
</style>

