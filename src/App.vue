<script setup>
	import Header from "./components/ui/Header.vue";
	import Footer from "./components/ui/Footer.vue";
	import Hero from "./components/sections/Hero.vue";
	import MovieCollection from "./components/sections/MovieCollection.vue";
	import ReachUs from "./components/sections/ReachUs.vue";
</script>

<template>
	<div
		class="app-wrapper w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-scroll"
	>
		<Header />

		<div class="page-wrapper md:flex-1">
			<Hero />
			<MovieCollection />
			<ReachUs />
		</div>

		<Footer />
	</div>
</template>

<style scoped></style>
