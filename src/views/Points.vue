<template>
	<AuthLayout>
		<div class="points"></div>
	</AuthLayout>
</template>

<script lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import Vue from 'vue'

export default Vue.extend({
	name: 'PointsView',

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
.points {
	margin: 0 50px;
}

@media only screen and (max-width: 600px) {
	.points {
		margin: 0 20x;
	}
}
</style>
