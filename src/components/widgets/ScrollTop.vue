<script setup>
	import { ref, onMounted, onBeforeMount } from "vue";
	import _ from "lodash";

	let handleDebouncedScroll = ref(null);

	onMounted(() => {
		handleDebouncedScroll.value = _.debounce(handleScroll, 100);
		window.addEventListener("scroll", handleDebouncedScroll.value);
	});

	onBeforeMount(() => {
		window.removeEventListener("scroll", handleDebouncedScroll.value);
	});

	const scrollTopButton = ref(null);

	function handleScroll() {
		const scrollBtn = ref(scrollTopButton.value);

		if (window.scrollY > 0) {
			scrollBtn.value?.classList?.remove("invisible");
		} else {
			scrollBtn.value?.classList?.add("invisible");
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<template>
	<div
		ref="scrollTopButton"
		class="app-scroll-to-top-btn fixed bottom-8 right-8 z-[99] invisible"
	>
		<button
			class="bg-red-600 p-4 rounded-full text-white hover:opacity-90"
			@click.native="scrollToTop"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="w-5 h-5 font-bold"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
				/>
			</svg>
		</button>
	</div>
</template>

<style></style>
