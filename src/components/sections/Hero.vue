<script setup>
	import homeBanner from "../../assets/imgs/Home_banner.jpg";
</script>
<template>
	<section
		ref="hero_section"
		class="w-full bg-center bg-cover bg-no-repeat h-screen bg-black text-white"
		:style="{ backgroundImage: `url(${homeBanner})` }"
	>
		<div class="flex flex-col px-2 md:mx-12 absolute bottom-10 left-0">
			<h2 class="text-4xl lg:text-5xl font-bold">Movie Library</h2>
			<p class="max-w-3xl text-lg text-gray-300">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit
				cum iure qui, nostrum at sapiente ducimus.
			</p>
		</div>
	</section>
</template>

<style></style>
