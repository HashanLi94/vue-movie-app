<script setup>
	import locationMap from "../../assets/imgs/Location_map.png";
	import ContactUsForm from "./../forms/ContactUsForm.vue";
	import GoogleMap from "./../widgets/GoogleMap.vue";
	import { ref } from "vue";
</script>
<template>
	<section
		ref="movies_collection_section"
		class="w-full lg:min-h-screen bg-[#000000] text-white"
	>
		<div class="section-wrapper page-layout flex flex-col py-12">
			<div class="section-header flex flex-col space-y-2">
				<o class="text-[36px] font-bold font-dinBold">How To Reach Us</o>
				<p class="text-[20px] font-medium text-[#B7B7B7] font-sans">
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div class="section-body flex flex-col lg:flex-row w-full">
				<div class="left-side">
					<ContactUsForm />
				</div>
				<div class="right-side">
					<img
						:src="locationMap"
						class="object-cover w-full h-full pt-12 pl-12"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
