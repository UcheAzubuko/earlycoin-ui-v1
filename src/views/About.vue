<template>
	<AuthLayout>
		<div class="about">
			<h1>About page is coming soon</h1>
		</div>
	</AuthLayout>
</template>

<script lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import Vue from 'vue'

export default Vue.extend({
	name: 'AboutUs',

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
.about {
	margin: 0 50px;
	height: 100vh;

	h1 {
		text-align: center;
		color: #ffffff;
	}
}

@media only screen and (max-width: 600px) {
	.about {
		margin: 0 20px;
	}
}
</style>
