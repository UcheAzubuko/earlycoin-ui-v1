<template>
	<div class="request-transfer-overlay">
		<div class="header">
			<span @click="closeRequestForm">
				<img src="@/assets/icons/close.svg" alt="close" class="close">
			</span>
			<span>
				<img src="@/assets/icons/home_logo.svg" alt="early coins logo" class="logo">
			</span>
			<div class="header-text">
				<img class="wallet" src="@/assets/icons/wallet.svg" alt="wallet" />
				<p>Request for Salary</p>
			</div>
		</div>
		<form method="post" @submit.prevent="submitRequest" class="request-transfer-form" autocomplete="off">
			<div class="form-input-group">
				<label for="amountToWithdraw">Amount to withdraw</label>
				<input id="amountToWithdraw" v-model="amountToWithdraw" placeholder="e.g. 40000" type="text" />
			</div>

			<div class="form-input-group">
				<label for="selectDestination">Select destination</label>
				<input id="selectDestination" v-model="selectDestination" placeholder="023428382" type="text" />
			</div>

			<div class="form-input-group">
				<label for="destinationBank">Destination bank</label>
				<input id="destinationBank" v-model="destinationBank" placeholder="GTBank" type="text" />
			</div>

			<div class="form-input-group">
				<label for="password">Password</label>
				<input id="login-password" v-model="password" placeholder="**********" type="password" autocomplete="false"
					readonly onfocus="this.removeAttribute('readonly');" />
			</div>

			<ButtonGeneric :loading="isLoading" class="request-transfer-btn" :btn-text="'Send to account'"
				:disabled="isDisabled" />
		</form>
	</div>
</template>

<script lang="ts">
import ButtonGeneric from '@/components/general/ButtonGeneric.vue'

export default {
	name: 'RequestTransfer',

	components: { ButtonGeneric },

	data() {
		return {
			isLoading: false,
			amountToWithdraw: '',
			selectDestination: '',
			destinationBank: '',
			password: '',
			isDisabled: true,
		}
	},

	methods: {
		submitRequest() {
			return null
		},
		closeRequestForm(): void {
			this.$emit('close')
		}
	},
}
</script>

<style lang="scss" scoped>
.request-transfer-overlay {
	width: 500px;
	border-radius: 10px;
	height: auto;
	border: none;
	background: #121127;
	overflow-x: hidden;
	overflow-y: auto;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 40px 24px 35px 24px;
	z-index: 99999999999;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 426px) {
		width: 350px;

		.request-transfer-form {
			.form-input-group {
				width: 100%;
				color: #ffffff;
				margin-bottom: 18px;
			}

			.form-input-group>label {
				font-size: 1.4rem;
				color: #ffffff;
			}

			.form-input-group>input {
				font-size: 1.6rem;
				margin-top: 6px;
				color: #70737C;
			}
		}
	}


	.header {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		span {
			display: inline-block;

			.close {
				position: absolute;
				top: 25px;
				right: 30px;
				height: 15px;
			}

			.logo {
				margin-bottom: 25px;
				height: 30px;
			}
		}

		.header-text {
			flex-direction: row;
			padding: 12px 50px;
			margin-bottom: 38px;
			margin-top: 0;
			border-radius: 0px 10px;
			background: #ffb91c;
			color: #121127;
			width: max-content;
			font-size: 16px;
			display: flex;
			flex-direction: row;
			gap: 7px;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;

			.wallet {
				height: 30px;
			}
		}
	}

	.request-transfer-form {
		.form-input-group {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			/* height: 8.7rem; */
			margin-bottom: 24px;
		}

		.form-input-group>label {
			font-family: 'Sen';
			font-style: normal;
			font-weight: 400;
			font-size: 1.4rem;
			color: #ffffff;
			line-height: 144%;
			letter-spacing: 0.02em;
		}

		.form-input-group>input {
			width: 100%;
			font-size: 2rem;
			letter-spacing: 0.02em;
			margin-top: 6px;
			border: 1px solid #9D4AF1;
			border-radius: 12px;
			padding: 18px 12px;
			outline: none;
			font-size: 14px;
			background: transparent;
			color: #70737C;
		}
	}
}
</style>
