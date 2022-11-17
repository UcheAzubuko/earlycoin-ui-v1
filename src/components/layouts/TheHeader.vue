<template>
	<div class="header">
		<div>
			<span @click="toggleSideNav">
				<img class="menu" src="@/assets/icons/menu.svg" alt="">
			</span>
			<span>
				<img class="logo" src="@/assets/icons/home_logo.svg" alt="">
			</span>
		</div>
	</div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
	name: "TheHeader",
	components: {
	},
	data: function () {
		return {

		};
	},

	methods: {
		toggleSideNav() {
			this.$emit('toggleSideNav')
			console.log('toggle')
		}
	},

	computed: {

	}
});
</script>
  
<style lang="scss" scoped>
.header {
	display: none;

	@media only screen and (max-width: 1100px) {
		display: block;
	}

	>div {
		padding: 40px 50px 48px 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media only screen and (max-width: 600px) {
			padding: 40px 30px 48px 30px;
		}

		span {
			display: inline-block;

			.menu {
				cursor: pointer;
			}
		}
	}
}
</style>
  