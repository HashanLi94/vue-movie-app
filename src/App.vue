<script setup>
	import Header from "./components/ui/Header.vue";
	import Footer from "./components/ui/Footer.vue";
	import ScrollTop from "./components/widgets/ScrollTop.vue";
</script>

<template>
	<div class="app-wrapper min-w-full min-h-screen flex flex-col font-sans">
		<Header />

		<div class="page-wrapper flex-grow">
			<router-view />
		</div>

		<ScrollTop />

		<Footer />
	</div>
</template>

<style scoped></style>
