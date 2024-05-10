<script setup>
	import { ref, onMounted } from "vue";
	import axios from "axios";
	import MovieCard from "../ui/MovieCard.vue";

	onMounted(async () => {
		await fetchMovies();
	});

	const movieCollection = ref([]);

	const fetchMovies = async () => {
		try {
			const { data } = await axios.get(
				`https://api.tvmaze.com/shows?page=0&perPage=5`
			);
			movieCollection.value = data;
		} catch (error) {
			console.log(error);
		}
	};
</script>
<template>
	<section
		ref="movies_collection_section"
		class="w-full min-h-screen bg-[#1D1D1D] text-white"
	>
		<div class="section-wrapper page-layout flex flex-col py-8">
			<div
				class="section-header w-full flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between border-b-2 border-white pb-8"
			>
				<p class="text-[36px] font-bold">Collect your favourites</p>
				<div class="search-area w-full lg:w-4/12">
					<div
						class="relative flex w-full items-center rounded-md border border-white shadow-lg bg-[#1D1D1D]"
					>
						<svg
							class="absolute left-4 block h-5 w-5 text-white"
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
							class="h-14 w-full rounded-md py-4 px-12 outline-none focus:ring-2 ring-slate-100 bg-[#1D1D1D] text-[18px] text-[#A3A3A3]"
							placeholder="Search title and add to grid"
						/>
					</div>
				</div>
			</div>
			<div class="section-body my-8">
				<div
					class="grid max-full justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
