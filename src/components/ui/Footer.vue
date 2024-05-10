<script setup></script>
<template>
	<footer class="bg-[#1D1D1D] text-white flex flex-col">
		<div
			class="text-[18px] mx-12 max-w-full flex flex-col md:flex-row items-center justify-between px-4 py-10 xl:px-2"
		>
			<div class="max-w-full">
				<div class="mb-1 flex flex-col space-y-1">
					<p class="font-bold">IT Group</p>
					<p>C. Salvador de Madariaga, 1</p>
					<p>28027 Madrid</p>
					<p>Spain</p>
				</div>
			</div>

			<div class="flex items-center justify-center space-x-4">
				<div class="font-medium">Follow Us On</div>
				<img
					src="../../assets/imgs/tw.png"
					class="w-[29px] h-[24px]"
					alt="twitter"
				/>
				<img
					src="../../assets/imgs/yt.png"
					class="w-[31px] h-[24px]"
					alt="youtube"
				/>
			</div>
		</div>

		<div class="border-t-[0.5px] border-slate-400 text-[#B7B7B7] text-[16px]">
			<div
				class="mx-12 flex max-w-full flex-col gap-y-4 px-2 py-4 text-center sm:flex-row sm:justify-between sm:text-left"
			>
				<div class="">Copyright © 2022 IT Hote ls. All rights reserved.</div>
				<div class="">
					Photos by Felix Mooneeram & on Unsplash
					<router-link class="underline hover:opacity-80" to="/"
						>Serge Kutuzov</router-link
					>

					<router-link class="underline hover:opacity-80 ml-1" to="/"
						>Unsplash</router-link
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<style></style>
