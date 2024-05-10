<script setup>
	import homeBanner from "../../assets/imgs/Home_banner.jpg";
</script>
<template>
	<section ref="hero_section" class="relative w-full bg-black text-white lg:min-h-screen">
		<div class="">
			<img
				:src="homeBanner"
				alt="hero_image"
				class="relative object-center object-fill h-[500px] lg:h-[660px] w-full"
			/>
		</div>

		<div class="flex flex-col page-layout pt-6 pb-16 lg:pt-6 lg:pb-24 space-y-4">
			<h2 class="text-4xl lg:text-5xl font-bold">Movie Library</h2>
			<p class="max-w-3xl text-lg text-gray-300">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit
				cum iure qui, nostrum at sapiente ducimus.
			</p>
		</div>
	</section>
</template>

<style></style>
