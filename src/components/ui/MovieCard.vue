<script setup>
	import { ref, watch, defineEmits } from "vue";
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

	const emits = defineEmits("onMovieRemove");

	const onRemoveItem = (id) => {
		emits("onMovieRemove", id);
	};
</script>
<template>
	<div
		:id="details?.id"
		class="app-movie-card relative mx-auto flex w-full flex-col overflow-hidden rounded-md bg-[#3c3c3c] text-white transition hover:translate-y-2 hover:shadow-lg"
	>
		<router-link to="/" class="relative">
			<img
				:src="
					details?.image?.medium
						? details?.image?.medium
						: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
				"
				class="h-[427px] w-full object-cover"
				alt="movie_image"
			/>
			<div class="flex-auto px-6 py-2">
				<p class="mt-4 mb-3 text-[32px] font-[400] font-din">
					{{ details?.name ?? "N/A" }}
				</p>
				<p
					class="mb-4 text-[18px] font-[500] truncate ... font-inter"
					v-html="details.summary"
				></p>
			</div>
		</router-link>

		<button
			class="bg-[#1D1D1DE6] absolute top-3 right-3 p-4 z-[99]"
			@click="onRemoveItem(details?.id)"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-6 h-6 text-[#B7B7B7]"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18 18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
</template>

<style></style>
