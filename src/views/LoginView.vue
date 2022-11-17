<template>
	<div class="login-view--container">
		<div class="logo--container"><img src="../assets/ec_logo.png" alt="" /></div>
		<div class="login-form--wrapper">
			<LoginForm />
		</div>
	</div>
</template>

<script lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
export default {
	components: { LoginForm },
}
</script>

<style>
.login-view--container {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100vh;
	margin: 0;
}

.logo--container {
	width: 56%;
	/* max-width: 1000px; */
	background: #121127;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.login-form--wrapper {
	width: 44%;
	/* max-width: 700px; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

@media screen and (max-width: 768px) {
	.login-view--container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		background: #121127;
	}

	.logo--container {
		width: 100%;
		margin: 128px 0 0;
		background: transparent;
	}

	.logo--container > img {
		width: 225px;
		height: 154px;
	}

	.login-form--wrapper {
		width: 100%;
		padding: 0 30px 66px;
		margin: 52px 0 0;
	}
}
</style>
