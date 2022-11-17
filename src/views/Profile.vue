<template>
	<AuthLayout>
		<div class="profile">
			<h1>Profile screen is coming soon</h1>
		</div>
	</AuthLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

export default Vue.extend({
	name: 'ProfileView',

	components: {
		AuthLayout,
	},

	data: function () {
		return {}
	},

	computed: {},
})
</script>

<style lang="scss">
.profile {
	margin: 0 50px;
	height: 100vh;

	h1 {
		text-align: center;
		color: #ffffff;
	}
}

@media only screen and (max-width: 600px) {
	.profile {
		margin: 0 20px;
	}
}
</style>
