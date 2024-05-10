<script setup>
	import homeBanner from "../../assets/imgs/Home_banner.jpg";
</script>
<template>
	<section
		ref="hero_section"
		class="relative w-full bg-black text-white lg:min-h-screen"
	>
		<div class="">
			<img
				:src="homeBanner"
				alt="hero_image"
				class="relative object-center object-fill h-[500px] lg:h-[660px] w-full"
			/>
		</div>

		<div
			class="flex flex-col page-layout pt-6 pb-16 lg:pt-6 lg:pb-24 space-y-4"
		>
			<p class="text-4xl lg:text-5xl font-dinBold">Movie Library</p>
			<p class="max-w-3xl text-[18px] text-[#B7B7B7]">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
				Laborum sit cum iure qui, nostrum at sapiente ducimus. <br />
				Laborum sit cum iure qui <br />
			</p>
		</div>
	</section>
</template>

<style></style>
