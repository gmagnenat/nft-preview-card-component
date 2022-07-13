<template>
	<div class="card grid w-[350px] rounded-lg bg-card-bg p-6 pb-8">
		<div class="card-body mt-5 font-light text-soft-blue">
			<h1
				class="mt-2.5 cursor-pointer self-start text-lg font-semibold tracking-widest text-white transition duration-75 hover:text-cyan"
			>
				Equilibrium #3429
			</h1>
			<p class="mt-4 font-light">
				Our Equilibrium collection promotes balance and calm.
			</p>
		</div>
		<div class="card-stats mt-6 flex place-content-between items-center">
			<div class="flex items-center text-cyan">
				<img
					class="mr-2 h-5 w-5 object-contain"
					src="../assets/icon-ethereum.svg"
					alt=""
				/>
				<span class="font-semibold">0.041 ETH</span>
			</div>
			<div class="flex items-center text-soft-blue">
				<img
					class="mr-2 h-5 w-5 object-contain"
					src="../assets/icon-clock.svg"
					alt=""
				/>
				<span
					class="transition duration-75 hover:cursor-pointer hover:text-cyan"
					>3 days left</span
				>
			</div>
		</div>
		<hr class="my-5 text-dark-blue" />
		<div class="card-meta flex items-center">
			<img
				class="card-user-profile rounded-100 mr-3 h-8 w-8 rounded-full border border-white object-contain"
				src="../assets/image-avatar.png"
				alt="User profile picture"
			/>
			<p class="font-normal text-soft-blue">
				Creation of
				<span
					class="card-username text-white transition duration-75 hover:cursor-pointer hover:text-cyan"
				>
					Jules Wyvern</span
				>
			</p>
		</div>
		<div
			class="card-illustration relative order-first -mb-0.5 grid cursor-pointer place-content-center"
		>
			<div
				class="absolute z-10 h-full w-full rounded-md bg-cyan opacity-0 bg-blend-lighten transition duration-75 hover:opacity-50 hover:bg-blend-multiply"
			></div>
			<img
				class="card-view-icon absolute place-self-center opacity-0"
				src="../assets/icon-view.svg"
				alt=""
			/>
			<img
				class="max-h-[302px] w-full rounded-md"
				src="../assets/image-equilibrium.jpg"
				alt="Equilibrium"
				width="604px"
				height="604px"
			/>
		</div>
	</div>
</template>

<style>
.card-illustration:hover > .card-view-icon {
	opacity: 1;
}
</style>

<script>
export default {
	setup() {
		return {};
	},
};
</script>
