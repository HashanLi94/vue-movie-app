<script setup>
	import { ref } from "vue";
	import MovieCard from "../ui/MovieCard.vue";

	const movieCollection = ref([
		{
			id: 1,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 2,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 3,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 4,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 5,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 6,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},

		{
			id: 7,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},

		{
			id: 8,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
		{
			id: 9,
			image: "",
			movieDetails: {
				name: "Batman Returns",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at cupiditate non quasi doloremque dolores aliquid quo ea mollitia et!",
			},
		},
	]);
</script>
<template>
	<section
		ref="movies_collection_section"
		class="w-full min-h-screen bg-[#1D1D1D] text-white"
	>
		<div class="section-wrapper flex flex-col px-2 py-8 md:mx-12">
			<div
				class="section-header flex flex-row items-center justify-between border-b-2 border-white pb-8"
			>
				<h2 class="text-xl lg:text-3xl font-bold">Movie Library</h2>
				<div class="search-area">
					<div
						class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border border-white shadow-lg bg-[#1D1D1D]"
					>
						<svg
							class="absolute left-2 block h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="11" cy="11" r="8" class=""></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
						</svg>
						<input
							type="name"
							name="search"
							class="h-14 w-full rounded-md py-4 px-40 pl-12 outline-none focus:ring-2 ring-slate-100 bg-[#1D1D1D]"
							placeholder="Search title and add to the grid"
						/>
					</div>
				</div>
			</div>
			<div class="section-body my-8">
				<div
					class="grid max-full justify-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3"
				>
					<MovieCard
						v-for="(item, idx) in movieCollection"
						:id="idx"
						:movie="item"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style></style>
