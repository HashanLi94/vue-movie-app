<script setup>
	import ContactUsForm from "./../forms/ContactUsForm.vue";
	import GoogleMap from "./../widgets/GoogleMap.vue";
	import { ref } from "vue";
</script>
<template>
	<section
		ref="movies_collection_section"
		class="w-full min-h-screen bg-[#000000] text-white"
	>
		<div class="section-wrapper flex flex-col px-2 py-8 md:mx-12">
			<div class="section-header flex flex-col space-y-2">
				<h2 class="text-xl lg:text-3xl font-bold">How To Reach Us</h2>
				<p class="text-md lg:text-xl font-medium text-[#B7B7B7]">
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div class="section-body flex flex-col md:flex-row w-full">
				<div class="left-side">
					<ContactUsForm />
				</div>
				<div class="right-side">
					<!-- <GoogleMap /> -->
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
