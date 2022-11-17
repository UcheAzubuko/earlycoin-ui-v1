<template>
	<div>
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'App',
})
</script>

<style lang="scss">
@font-face {
	font-family: 'Rubik';
	src: url('./assets/fonts/Rubik-Regular.ttf') format('truetype');
}

$rubik: 'Rubik', sans-serif;

body {
	background-color: #121127;
	font-family: Rubik, Helvetica, Arial, sans-serif;
	color: #ffffff;
	font-size: 16px;
}
</style>
