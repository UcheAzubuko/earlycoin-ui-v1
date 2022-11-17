<template>
	<div class="login-form--container">
		<h2>Login to continue</h2>

		<form method="post" @submit.prevent="loginUser" class="login-form" autocomplete="off">
			<div class="form-input-group">
				<label for="login-email">Email</label>
				<input id="login-email" v-model="email" placeholder="Your email address" type="text" />
			</div>

			<div class="form-input-group">
				<label for="login-password">Password</label>
				<input
					id="login-password"
					v-model="password"
					placeholder="Your password"
					type="password"
					autocomplete="false"
					readonly
					onfocus="this.removeAttribute('readonly');"
				/>
			</div>
			<span class="login-form--forgot-password">Forgot password</span>

			<ButtonGeneric :loading="loading" class="login-btn" :btn-text="'Login'" :disabled="isDisabled" />
		</form>

		<router-link to="/register">Don’t have an account? Register</router-link>
	</div>
</template>

<script lang="ts">
import ButtonGeneric from '../general/ButtonGeneric.vue'

export default {
	components: { ButtonGeneric },

	data() {
		return {
			email: '' as string,
			password: '' as string,
			loading: false as boolean,
			isDisabled: false,
		}
	},

	computed: {
		// isDisabled(): boolean {
		// 	return this.email === '' || this.password === ''
		// },
	},

	methods: {
		loginUser() {
			// validate inputs first
			console.log('form here')
			// this.loading = true

			// try {
			// 	setTimeout(() => {
			// 		this.loading = false
			// 	}, 3000)
			// } catch (error) {
			// 	console.log(error)
			// 	this.loading = false
			// }
		},
	},
}
</script>

<style>
.login-form--container {
	width: 460px;
	/* background: blue; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.login-form--container > h2 {
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 700;
	font-size: 41px;
	line-height: 48px;
	color: #000000;
	margin-bottom: 60px;
}

.login-form {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.form-input-group {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	/* height: 8.7rem; */
	padding: 10px 18px;
	border: 1px solid #9d4af1;
	border-radius: 12px;
	margin-bottom: 24px;
}

.form-input-group > label {
	font-family: 'Sen';
	font-style: normal;
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 144%;
	letter-spacing: 0.02em;
}

.form-input-group > input {
	height: 28px;
	width: 100%;
	font-family: 'Sen';
	font-style: normal;
	font-weight: 400;
	font-size: 2rem;
	line-height: 144%;
	letter-spacing: 0.02em;
	margin-top: 6px;

	outline: none;
	background: transparent;
	border: none;
}

.login-form--forgot-password {
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 400;
	font-size: 1.5rem;
	line-height: 1.6rem;
	color: #9d4af1;
	opacity: 0.7;
	margin: 0px 0 40px;
	cursor: pointer;
}

.login-btn {
	margin: 0 auto;
}

.login-form--container > a,
.login-form--container > a:active,
.login-form--container > a:focus {
	font-family: 'Rubik';
	text-decoration: none;
	margin-top: 6.5rem;
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;

	color: #9d4af1;
	opacity: 0.7;
	/* outline: none; */
}

@media screen and (max-width: 426px) {
	.login-form--container {
		width: 320px;
		align-items: center;
	}
}

@media screen and (max-width: 769px) {
	.login-form--container {
		width: 420px;
		align-items: center;
	}

	.login-form--container > h2 {
		font-size: 20px;
		line-height: 36px;
		text-align: center;
		color: #ffffff;
		margin-bottom: 14px;
	}

	.form-input-group {
		width: 100%;
		padding: 9px 12px;
		border: 1px solid #9d4af1;
		border-radius: 8px;
		color: #ffffff;
		margin-bottom: 18px;
	}

	.form-input-group > label {
		font-size: 1.2rem;
	}

	.form-input-group > input {
		height: 20px;
		font-size: 1.6rem;
		margin-top: 6px;
		color: #ffffff;
	}

	.login-form--container > a,
	.login-form--container > a:active,
	.login-form--container > a:focus {
		margin-top: 2.4rem;
		font-size: 1.4rem;
		color: #ffffff;
	}

	.login-form--forgot-password {
		font-size: 1.2rem;
		line-height: 1.4rem;
		color: #9d4af1;
	}

	.login-btn {
		width: 255px;
	}
}
</style>
