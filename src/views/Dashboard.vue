<template>
	<AuthLayout>
		<template v-if="wantsToFillKycForm">
			<div>
				<OverlayBackground />
				<KycForm @close="closeKycForm" />
			</div>
		</template>
		<template v-if="wantsToRequestTransfer">
			<div>
				<OverlayBackground />
				<RequestTransfer @close="closeRequestTransferForm" />
			</div>
		</template>
		<CompliancePrompt @openKycForm="openKycForm" />
		<div class="dashboard">
			<section class="showcase-wrapper">
				<!-- Monthly Income Label -->
				<div class="monthly-income-card">
					<div class="arrow-icon-wrapper">
						<img class="arrow-icon" src="@/assets/icons/arrow_circle_up_left.svg" alt="" />
					</div>
					<div>
						<span>Monthly Income</span>
						<span>N{{ `0` }}</span>
					</div>
				</div>
				<!-- EarlyCoin Balance -->
				<div class="ec-balance-wrapper">
					<div>
						<span>EarlyCoin Balance</span>
						<img @click="toggleAbilityToViewBalance" class="eye" src="@/assets/icons/eye.svg" alt="" />
					</div>
					<span class="ec-balance" v-if="canViewBalance">N{{ `0` }}</span>
					<span class="ec-balance" v-else>N{{ `**********` }}</span>
				</div>
			</section>

			<section class="offers-transactions-request">
				<section class="offers-transactions">
					<!-- Offers List -->
					<section class="offers-wrapper">
						<div class="heading">
							<img class="lock" src="@/assets/icons/time_lock.svg" alt="" />
							<h2>
								Offers <span><em>(Amazing Offers)</em></span>
							</h2>
						</div>
						<div class="offer-list">
							<div class="offer-item" v-for="offer in offers" :key="offer.id">
								<div class="offer-icon-box">
									<img :src="offer.icon" :alt="offer.name" />
								</div>
								<p class="offer-name">
									{{ offer.name }}
								</p>
							</div>
						</div>
					</section>
					<!-- Transactions List -->
					<section class="transactions-wrapper">
						<div class="heading">
							<h2>Last Transactions</h2>
							<span v-if="transactions.length">See all</span>
						</div>
						<div class="transactions-list">
							<div class="transactions-item" v-for="transaction in transactions" :key="transaction.id">
								<div>
									<p class="transaction-date">
										{{ transaction.date }}
									</p>
									<p class="transaction-date">
										{{ transaction.time }}
									</p>
								</div>
								<p class="transaction-amount">N{{ transaction.amount }}</p>
							</div>
							<div class="no-transaction-list">
								<p>You have no transaction history</p>
							</div>
						</div>
					</section>
				</section>
				<!-- Request for Salary -->
				<section @click="openRequestTransferForm" class="request-wrapper">
					<img class="wallet" src="@/assets/icons/wallet.svg" alt="wallet" />
					<h1>Request for Salary</h1>
					<div class="arrow-icon">
						<img class="arrow" src="@/assets/icons/right_arrow.svg" alt="arrow" />
					</div>
				</section>
			</section>
		</div>
	</AuthLayout>
</template>

<script>
import Vue from 'vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import CompliancePrompt from '@/components/general/CompliancePrompt.vue'
import OverlayBackground from '@/components/general/OverlayBackground.vue'
import KycForm from '@/components/forms/KycForm.vue'
import RequestTransfer from '@/components/forms/RequestTransfer.vue'

export default Vue.extend({
	name: 'DashBoard',
	components: {
		AuthLayout,
		CompliancePrompt,
		KycForm,
		OverlayBackground,
		RequestTransfer,
	},
	data: function () {
		return {
			offers: [
				{
					name: 'Restaurant',
					icon: require('@/assets/icons/restaurant.svg'),
					id: '1',
				},
				{ name: 'Movies', icon: require('@/assets/icons/movies.svg'), id: '2' },
				{
					name: 'Games',
					icon: require('@/assets/icons/game_controller.svg'),
					id: '3',
				},
				{
					name: 'More',
					icon: require('@/assets/icons/four_circles.svg'),
					id: '4',
				},
			],
			dateFormat: {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			},
			transactions: [
				// {
				// 	id: '1',
				// 	amount: '200000',
				// 	time: new Date().toLocaleTimeString('en-us', this.dateFormat),
				// 	date: new Date().toLocaleDateString('en-us', this.dateFormat),
				// },
				// {
				// 	id: '2',
				// 	amount: '200000',
				// 	time: new Date().toLocaleTimeString('en-us', this.dateFormat),
				// 	date: new Date().toLocaleDateString('en-us', this.dateFormat),
				// },
				// {
				// 	id: '3',
				// 	amount: '200000',
				// 	time: new Date().toLocaleTimeString('en-us', this.dateFormat),
				// 	date: new Date().toLocaleDateString('en-us', this.dateFormat),
				// },
			],
			wantsToFillKycForm: false,
			wantsToRequestTransfer: false,
			canViewBalance: false,
		}
	},

	methods: {
		openKycForm() {
			this.wantsToFillKycForm = true
		},
		closeKycForm() {
			this.wantsToFillKycForm = false
		},
		openRequestTransferForm() {
			this.wantsToRequestTransfer = true
		},
		closeRequestTransferForm() {
			this.wantsToRequestTransfer = false
		},
		toggleAbilityToViewBalance() {
			this.canViewBalance = !this.canViewBalance
		},
	},

	mounted() {
		const userInfo = localStorage.getItem('user-info')
		// console.log(userInfo)
	},
})
</script>

<style lang="scss" scoped>
.dashboard {
	margin: 0 50px;

	@media only screen and (max-width: 600px) {
		margin: 0 30px;
	}

	.offers-transactions-request,
	.showcase-wrapper {
		max-width: 755px;
	}

	.showcase-wrapper {
		max-width: 755px;
		padding: 25px 40px;
		height: 275px;
		background: linear-gradient(180deg, #7535b5 -30%, #984be5 111.11%);
		border-radius: 25.2599px;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: space-between;
		background-image: url('@/assets/icons/dashboard_bg.svg');
		margin-bottom: 58px;

		@media only screen and (max-width: 1100px) {
			margin-bottom: 48px;
		}

		@media only screen and (max-width: 425px) {
			padding: 18px 25px 18px 15px;
			height: 210px;
		}

		.monthly-income-card {
			max-width: 356.26px;
			height: 88.72px;
			background: #14d610;
			border-radius: 19.407px;
			overflow: hidden;
			z-index: 3000;
			padding: 16px;
			display: flex;
			align-items: center;
			gap: 12px;

			.arrow-icon-wrapper {
				height: 55px;
				width: 55px;
				padding: 12px;
				background: rgba(217, 225, 255, 0.25);
				border-radius: 11.0897px;
				display: inline-flex;
				align-items: center;
				justify-content: center;

				.arrow-icon {
					height: 25px;
					width: 25px;
					transform: scale(1.6);
				}
			}

			div:nth-child(2) {
				display: grid;
				gap: 2px;

				span:nth-child(2) {
					font-weight: 500;
					font-size: 22px;
					color: #ffffff;
				}
			}
		}

		.ec-balance-wrapper {
			> div {
				display: flex;
				align-items: center;
				gap: 16px;

				span {
					font-size: 19px;
					font-weight: 300;
					display: inline-block;
					color: #ffffff;

					@media only screen and (max-width: 1100px) {
						font-size: 14px;
					}
				}

				img.eye {
					cursor: pointer;
				}
			}

			span.ec-balance {
				font-weight: 500;
				font-size: 69px;
				color: #ffc56c;

				@media only screen and (max-width: 425px) {
					font-size: 40px;
				}
			}
		}

		.top-blob,
		.bottom-blob {
			position: absolute;
		}

		.bottom-blob {
			bottom: -45px;
			left: 0;
			z-index: 300;
		}

		.top-blob {
			top: 0;
			right: 0;
			z-index: 300;
		}
	}

	.offers-transactions-request {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		column-gap: 25px;

		@media only screen and (max-width: 1100px) {
			display: flex;
			flex-direction: column-reverse;
		}

		.offers-transactions {
			.offers-wrapper {
				.heading {
					color: #ffffff;
					display: flex;
					margin-bottom: 30px;
					gap: 10px;

					h2 {
						font-size: 20px;
						font-weight: 500;

						@media only screen and (max-width: 425px) {
							font-size: 16px;
						}

						span {
							color: #9d4af1;
						}
					}
				}

				.offer-list {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					column-gap: 5px;
					align-items: center;
					justify-content: center;

					@media only screen and (max-width: 425px) {
						display: flex;
						column-gap: 0;
						row-gap: 15px;
					}

					.offer-item {
						display: flex;
						flex-direction: column;
						align-items: center;
						cursor: pointer;
						text-align: center;
						color: #ffffff;

						@media only screen and (max-width: 425px) {
							font-size: 14px;
						}

						.offer-icon-box {
							height: 65px;
							width: 65px;
							background: #1f1e34;
							padding: 12px;
							display: flex;
							justify-content: center;
							align-items: center;
							border-radius: 15.424px;
							margin: 0 12px 12px 12px;

							@media only screen and (max-width: 425px) {
								margin: 0 8px 8px 8px;
								padding: 10px;
							}

							img {
								height: 30px;
								width: 30px;

								@media only screen and (max-width: 425px) {
									height: 25px;
									width: 25px;
								}
							}
						}
					}
				}
			}

			.transactions-wrapper {
				margin-top: 30px;

				@media only screen and (max-width: 1100px) {
					margin-top: 48px;
				}

				.heading {
					color: #ffffff;
					display: flex;
					margin-bottom: 20px;
					gap: 10px;
					align-items: center;
					justify-content: space-between;

					h2 {
						font-size: 20px;
						font-weight: 500;

						@media only screen and (max-width: 425px) {
							font-size: 16px;
						}
					}

					span {
						color: #ffb91c;
						cursor: pointer;
					}
				}

				.transactions-list {
					display: grid;
					grid-template-rows: repeat(3, 1fr);
					row-gap: 10px;

					.transactions-item {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						cursor: pointer;
						padding: 30px 20px;
						background: #1f1e34;
						border-radius: 14px;

						> div {
							display: flex;
							gap: 10px;
							font-size: 14px;
							font-weight: 300;
							color: rgba(255, 255, 255, 0.5);
						}

						.transaction-amount {
							font-size: 16px;
							color: #f87777;
						}
					}

					.no-transaction-list {
						p {
							text-align: center;
							color: #ffffff;
							margin-top: 20px;
						}
					}
				}
			}
		}

		.request-wrapper {
			margin-top: 50px;
			border-radius: 12px;
			background: #ffb91c;
			height: 480px;
			color: #121127;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			padding: 35px;
			cursor: pointer;

			@media only screen and (max-width: 1100px) {
				height: 70px;
				border-radius: 0px 12px;
				flex-direction: row;
				padding: 18px 40px;
				margin-bottom: 38px;
				margin-top: 0;
			}

			@media only screen and (max-width: 1100px) {
				padding: 18px 20px;
			}

			img.wallet {
				height: 150px;

				@media only screen and (max-width: 1100px) {
					height: 40px;
				}
			}

			h1 {
				font-size: 34px;
				font-weight: bold;

				@media only screen and (max-width: 1100px) {
					font-size: 24px;
				}

				@media only screen and (max-width: 425px) {
					font-size: 18px;
				}
			}

			.arrow-icon {
				height: 75px;
				width: 75px;
				background: #d39b1c;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;

				@media only screen and (max-width: 1100px) {
					background: #14d610;
					height: 30px;
					width: 30px;
				}

				img {
					height: 25px;
					width: 25px;
				}
			}
		}
	}
}
</style>
