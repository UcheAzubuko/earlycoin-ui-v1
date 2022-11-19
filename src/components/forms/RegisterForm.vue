<template>
	<div class="register-form--container">
		<h2>Create an Account</h2>

		<form method="post" @submit.prevent="createUser" class="register-form" autocomplete="off">
			<div class="form-input-group">
				<label for="register-name">Name</label>
				<input id="register-name" v-model="name" placeholder="Your name" type="text" />
			</div>

			<div class="form-input-group">
				<label for="register-email">Email</label>
				<input id="register-email" v-model="email" placeholder="Your email address" type="email" />
			</div>

			<div class="form-input-group">
				<label for="register-dob">Date Of Birth</label>
				<date-picker
					class="date-picker"
					v-model="dob"
					type="date"
					format="DD/MM/YYYY"
					placeholder="Your date of birth"
				></date-picker>
			</div>

			<div class="form-input-group">
				<label for="register-phoneNumber">Phone number</label>
				<input id="register-phoneNumber" v-model="phoneNumber" placeholder="Your phoneNumber" type="text" />
			</div>

			<div class="form-input-group">
				<label for="register-password">Password</label>
				<input
					id="register-password"
					v-model="password"
					placeholder="Your password"
					type="password"
					autocomplete="false"
					readonly
					onfocus="this.removeAttribute('readonly');"
				/>
			</div>

			<div class="form-checkbox-group">
				<input id="register-terms" type="checkbox" v-model="agreedToTerms" />
				<label for="register-terms">I have agreed to the terms and condition</label>
			</div>

			<ButtonGeneric
				:loading="loading"
				@click="createUser"
				class="register-btn"
				:btn-text="'Create Account'"
				:disabled="isDisabled"
			/>
		</form>
	</div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import ButtonGeneric from '../general/ButtonGeneric.vue'

import { register } from '../../services/auth'

export default {
	components: { ButtonGeneric, DatePicker },

	data() {
		return {
			name: '',
			email: '',
			dob: '',
			phoneNumber: '',
			password: '',
			agreedToTerms: false,
			// isDisabled: false,
			loading: false,
		}
	},

	computed: {
		isDisabled() {
			return (
				this.name == '' ||
				this.email == '' ||
				// this.dob == '' ||
				this.phoneNumber == '' ||
				this.password == '' ||
				this.agreedToTerms == false
			)
		},
	},

	methods: {
		async createUser() {
			this.loading = true
			try {
				let res = await register(this.name, this.email, this.phoneNumber, this.password)
				this.loading = false

				console.log(res)

				localStorage.setItem('local', res.data.confirmToken)
				localStorage.setItem('user-info', JSON.stringify(res.data.user))

				this.$store.commit('SET_LISTATE', true)
				this.$router.push('/')
			} catch (error) {
				console.log(error)

				this.loading = false
			}
		},
	},
}
</script>

<style>
.register-form--container {
	width: 460px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.register-form--container > h2 {
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 700;
	font-size: 41px;
	line-height: 48px;
	color: #000000;
	margin-bottom: 50px;
}

.register-form {
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
	color: #000000;
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

.form-input-group > .date-picker {
	width: 100%;
}

.form-input-group > .date-picker > .mx-input-wrapper > input {
	-webkit-box-shadow: none;
	box-shadow: none;
	border: none;
	width: 100%;
	/* height: 28px; */
	font-family: 'Sen';
	font-style: normal;
	font-weight: 400;
	font-size: 2rem;
	line-height: 144%;
	letter-spacing: 0.02em;
	margin: 8px 0 0;
	padding: 0;

	outline: none;
	background: transparent;
	border: none;
}

.form-checkbox-group {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 0 34px;
}

.form-checkbox-group > label {
	margin-left: 10px;
	font-family: 'Sen';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 19px;
	opacity: 0.7;
	color: #000000;
}

.register-btn {
	margin: 0 auto;
}

@media screen and (max-width: 769px) {
	.register-form--container {
		width: 420px;
		align-items: center;
	}

	.register-form--container > h2 {
		font-size: 20px;
		line-height: 36px;
		text-align: center;
		color: #ffffff;
		margin-bottom: 14px;
	}

	.form-input-group > label {
		font-size: 1.2rem;
		color: #ffffff;
	}

	.form-input-group > input {
		height: 20px;
		font-size: 1.6rem;
		margin-top: 6px;
		color: #ffffff;
	}

	.form-input-group > .date-picker > .mx-input-wrapper > input {
		height: 20px;
		font-size: 1.6rem;
		margin-top: 6px;
		color: #ffffff;
	}

	.form-checkbox-group {
		margin: 16px 0 58px;
	}

	.form-checkbox-group > label {
		margin-left: 8px;
		font-size: 1.2rem;
		color: #ffffff;
		opacity: 0.7;
	}
}

@media screen and (max-width: 426px) {
	.register-form--container {
		width: 320px;
		align-items: center;
	}
}
</style>
