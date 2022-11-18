<template>
	<div id="auth-wrapper">
		<SideNav />
		<MobileNav v-if="showMobileNav" @closeMobileNav="closeMobileNav" />
		<OverlayBackground v-if="showMobileNav" />
		<TheHeader @toggleSideNav="openMobileNav" />
		<div class="auth-pages">
			<slot />
		</div>
	</div>
</template>

<script>
import SideNav from '@/components/layouts/SideNav.vue'
import MobileNav from '@/components/layouts/MobileNav.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import OverlayBackground from '@/components/general/OverlayBackground.vue'

export default {
	name: 'AuthLayout',
	components: {
		SideNav,
		TheHeader,
		MobileNav,
		OverlayBackground,
	},

	data() {
		return {
			showMobileNav: false,
		}
	},

	methods: {
		openMobileNav() {
			this.showMobileNav = true;
		},

		closeMobileNav() {
			this.showMobileNav = false;
		}
	},
}
</script>

<style lang="scss">
#auth-wrapper {
	display: flex;
	background: #121127;
	padding: 0px 0 40px 0;

	@media only screen and (max-width: 1100px) {
		display: block;
	}
}

.auth-pages {
	background: transparent;
	padding: 40px 0 20px 0;
	width: calc(100vw - 272px);
	margin: 0 0 0 auto;
	height: 100vh;

	@media only screen and (max-width: 1100px) {
		width: 100vw;
		margin: 0 auto;
		padding: 0px 0 20px 0;
		height: auto;
	}
}
</style>
