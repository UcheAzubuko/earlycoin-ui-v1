<template>
	<AuthLayout>
		<div class="community"></div>
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
}

@media only screen and (max-width: 600px) {
	.community {
		margin: 0 20x;
	}
}
</style>
