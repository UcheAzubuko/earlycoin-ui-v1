<template>
	<AuthLayout>
		<div class="community">
			<h1>Community is coming soon</h1>
		</div>
	</AuthLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

export default Vue.extend({
	name: 'CommunityView',

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
.community {
	margin: 0 50px;
	height: 100vh;

	h1 {
		text-align: center;
		color: #ffffff;
	}
}

@media only screen and (max-width: 600px) {
	.community {
		margin: 0 20px;
	}
}
</style>
