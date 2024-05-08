<script setup>
	import { ref, watch } from "vue";
	const props = defineProps({
		movie: {
			required: true,
			type: Object,
		},
	});

	const details = ref({});

	watch(
		() => props?.movie,
		(newValue, oldValue) => {
			details.value = { ...newValue };
		},
		{
			immediate: true,
			deep: true,
		}
	);
</script>
<template>
	<div
		:id="details?.id"
		class="app-movie-card mx-auto flex w-full flex-col overflow-hidden rounded-md bg-[#3c3c3c] text-white transition hover:translate-y-2 hover:shadow-lg"
	>
		<router-link to="">
			<img
				:src="
					details?.image
						? details?.image
						: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
				"
				class="h-64 w-full object-cover"
				alt="movie_image"
			/>
			<div class="flex-auto px-6 py-2">
				<h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
					{{ details?.movieDetails?.name ?? "N/A" }}
				</h3>
				<p class="mb-4 text-base font-light">
					{{ details?.movieDetails?.description ?? "N/A" }}
				</p>
			</div>
		</router-link>
	</div>
</template>

<style></style>
