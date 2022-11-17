<template>
	<div id="auth-wrapper">
		<SideNav />
		<TheHeader />
		<div class="auth-pages">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import SideNav from '@/components/layouts/SideNav.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default {
	name: 'AuthLayout',
	components: {
		SideNav,
		TheHeader,
	},
}
</script>

<style scss>
#auth-wrapper {
	display: flex;
	/* background: #121127; */
}

.auth-pages {
	background: transparent;
	padding: 77px 0 20px 0;
	width: calc(100vw - 272px);
	margin: 0 0 0 auto;

	@media only screen and (max-width: 1100px) {
		width: 100vw;
		margin: 0 auto;
		padding: 0px 0 20px 0;
	}
}
</style>
