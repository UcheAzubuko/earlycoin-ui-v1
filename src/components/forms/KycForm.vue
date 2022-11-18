<template>
	<div class="kyc-overlay">
		<div class="header">
			<span @click="closeKycForm">
				<img src="@/assets/icons/close.svg" alt="close" class="close">
			</span>
			<span>
				<img src="@/assets/icons/home_logo.svg" alt="early coins logo" class="logo">
			</span>
			<h1>KYC Form</h1>
		</div>
		<form method="post" @submit.prevent="submitKyc" class="kyc-form" autocomplete="off">
			<div class="form-input-group">
				<label for="employerDetails">Employer details</label>
				<input id="employerDetails" v-model="employerDetails" placeholder="Joseph" type="text" />
			</div>

			<div class="form-input-group">
				<label for="nameOfCompany">Name of company</label>
				<input id="nameOfCompany" v-model="nameOfCompany" placeholder="DaraCo" type="text" />
			</div>

			<div class="form-input-group">
				<label for="monthlyIncome">Monthly income</label>
				<input id="monthlyIncome" v-model="monthlyIncome" placeholder="N400,000" type="text" />
			</div>

			<div class="form-input-group">
				<label for="bvn">BVN</label>
				<input id="bvn" v-model="bvn" type="text" />
			</div>
			<ButtonGeneric :loading="isLoading" class="kyc-btn" :btn-text="'Click to verify'" :disabled="isDisabled" />
		</form>
	</div>
</template>

<script>
import ButtonGeneric from '@/components/general/ButtonGeneric.vue'

export default {
	name: 'KycForm',

	components: { ButtonGeneric },

	data() {
		return {
			isLoading: false,
			employerDetails: '',
			nameOfCompany: '',
			monthlyIncome: '',
			bvn: '',
			isDisabled: true,
		}
	},

	methods: {
		submitKyc() {
			return null
		},
		closeKycForm() {
			this.$emit('close')
		}
	},
}
</script>

<style lang="scss" scoped>
.kyc-overlay {
	// margin: auto 0 auto 0;
	// max-height: 65%;
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
		width: 90%;
		height: 75%;

		.kyc-form {
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

		span {
			display: inline-block;

			.close {
				position: absolute;
				top: 25px;
				right: 30px;
				height: 15px;
				cursor: pointer;
			}

			.logo {
				margin-bottom: 25px;
				height: 30px;
			}
		}

		h1 {
			font-size: 24px;
			font-weight: bold;
			color: white;
			margin-bottom: 30px;
		}
	}

	.kyc-form {
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
