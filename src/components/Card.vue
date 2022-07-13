<template>
	<div class="w-[300px] p-4 grid bg-card-bg">
		<div class="card-body text-soft-blue font-light mt-4">
			<h1 class="text-white">Equilibrium #3429</h1>
			<p class="mt-4">Our Equilibrium collection promotes balance and calm.</p>
		</div>
		<div class="card-stats flex place-content-between mt-4">
			<div class="text-cyan flex items-center">
				<img
					class="mr-2 w-5 h-5 object-contain"
					src="../assets/icon-ethereum.svg"
					alt=""
				/>
				<span>0.041 ETH</span>
			</div>
			<div class="text-soft-blue flex items-center">
				<img
					class="mr-2 w-5 h-5 object-contain"
					src="../assets/icon-clock.svg"
					alt=""
				/>
				<span>3 days left</span>
			</div>
		</div>
		<hr class="text-dark-blue my-5" />
		<div class="card-meta">
			<img
				class="w-6 h-6 object-contain rounded-100"
				src="../assets/image-avatar.png"
				alt=""
			/>
			<span>Jules Wyvern</span>
		</div>
		<div class="card-illustration order-first">
			<img src="https://picsum.photos/id/1/300/300" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>
