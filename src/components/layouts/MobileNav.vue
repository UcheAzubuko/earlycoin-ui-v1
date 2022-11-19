<template>
	<div class="mobilenav">
		<div class="username-wrapper">
			<div @click="closeMobileNav" class="close-nav">
				<img src="@/assets/icons/left_arrow.svg" alt="left_arrow" />
			</div>
			<div class="username-wrapper__initials">
				{{ initials }}
			</div>
			<div class="username-wrapper__name">
				<span>Welcome back!</span>
				<span class="fullname">{{ fullname }}</span>
			</div>
		</div>
		<div class="links-wrapper">
			<ul>
				<li class="nav-link">
					<router-link to="/about-us">
						<div>About Us</div>
					</router-link>
				</li>
				<li class="nav-link">
					<router-link to="/">Dashboard</router-link>
				</li>
				<li class="nav-link">
					<router-link to="/community">Community</router-link>
				</li>
				<li class="nav-link">
					<router-link to="/points">Points</router-link>
				</li>
				<li class="nav-link">
					<router-link to="/profile">Profile</router-link>
				</li>
			</ul>
			<button class="logout-btn" @click="logout">Log Out</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'HomeView',
	components: {},
	data: function () {
		return {
			user: {
				firstname: 'Uche',
				lastname: 'Azubuko',
			},
		}
	},

	methods: {
		closeMobileNav() {
			this.$emit('closeMobileNav')
		},

		logout() {
			this.$store.commit('SET_LISTATE', false)
			localStorage.clear()
			this.$router.push('/login')
			// clear local storage here
		},
	},

	computed: {
		fullname: function () {
			return this.user.firstName + ' ' + this.user.lastName
		},
		initials: function () {
			return this.fullname[0]
		},
	},

	beforeMount() {
		let userInfo = localStorage.getItem('user-info')
		this.user = JSON.parse(userInfo)
		// console.log(this.user)
	},
})
</script>

<style lang="scss" scoped>
.mobilenav {
	background-color: #9d4af1;
	width: 272px;
	height: 100vh;
	position: fixed;
	z-index: 9999999999999;

	.username-wrapper {
		padding: 0 36px;
		display: flex;
		column-gap: 14px;
		align-items: center;
		background: #7f69c0;
		position: relative;
		padding-top: 60px;
		height: 150px;

		.close-nav {
			display: inline-block;
			position: absolute;
			top: 40px;
			left: 40px;
			cursor: pointer;
		}

		&__initials {
			width: 44px;
			height: 44px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #7e3bc2;
			border-radius: 50%;
			font-weight: 700;
		}

		&__name {
			span {
				display: block;
			}

			span:nth-child(1) {
				font-size: 12px;
				margin-bottom: 2px;
				color: rgba($color: #ffffff, $alpha: 0.5);
				text-align: end;
			}

			span:nth-child(2) {
				font-size: 18px;
				font-weight: 500;
			}
		}
	}

	.links-wrapper {
		padding: 20px 0;

		ul {
			li.nav-link {
				a {
					padding: 20px 50px 20px 75px;
					display: block;
					white-space: nowrap;
					color: #ffffff;
					font-weight: 500;
					transition: all 0.15s linear;

					&.router-link-exact-active {
						border-right: solid 8px #ffb91c;
						background-color: #7e3bc2;
					}
				}
			}
		}

		button.logout-btn {
			width: 100%;
			color: #ffffff;
			border: none;
			padding: 20px 50px 20px 75px;
			outline: none;
			background-color: transparent;
			text-align: left;
			font-size: 16px;
			cursor: pointer;
			font-weight: 500;
			transition: all 0.15s linear;
			white-space: nowrap;
		}
	}
}

@media only screen and (max-width: 1100px) {
}
</style>
