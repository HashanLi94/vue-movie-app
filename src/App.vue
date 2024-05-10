<script setup>
	import Header from "./components/ui/Header.vue";
	import Footer from "./components/ui/Footer.vue";
</script>

<template>
	<div
		class="app-wrapper w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-scroll font-sans"
	>
		<Header />

		<div class="page-wrapper md:flex-1">
			<router-view />
		</div>

		<Footer />
	</div>
</template>

<style scoped></style>
