<template>
	<div id="auth-wrapper">
		<SideNav />
		<MobileNav v-if="showMobileNav" @closeMobileNav="closeMobileNav" />
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

export default {
	name: 'AuthLayout',
	components: {
		SideNav,
		TheHeader,
		MobileNav,
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

	@media only screen and (max-width: 1100px) {
		padding: 0px 0 40px 0;
		display: block;
	}
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
