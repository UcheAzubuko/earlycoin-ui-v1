<template>
	<button class="btn-generic">
		<span v-if="!loading">{{ btnText }}</span>

		<svg v-if="loading" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128"
			xml:space="preserve">
			<g>
				<path d="M64 128A64 64 0 0 1 18.34 19.16L21.16 22a60 60 0 1 0 52.8-17.17l.62-3.95A64 64 0 0 1 64 128z"
					fill="#ffffff" />
				<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="600ms"
					repeatCount="indefinite"></animateTransform>
			</g>
		</svg>
	</button>
</template>

<script lang="ts">
export default {
	name: 'ButtonGeneric',
	props: {
		btnText: {
			type: String,
		},
		loading: {
			type: Boolean,
		},
	},
}
</script>

<style>
.btn-generic {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 20px 85px;
	max-height: 56px;
	background: #9d4af1;
	border-radius: 85px;
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #ffffff;
	cursor: pointer;
	margin: 0 auto;
}

.btn-generic>svg {
	height: 32px;
}

@media screen and (max-width: 426px) {
	.btn-generic {
		padding: 20px 80px;
		font-size: 14px;
		line-height: 17px;
	}
}
</style>
