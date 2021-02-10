<template>
	<div>
		<Navigation />
		<nuxt/>
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
</style>

