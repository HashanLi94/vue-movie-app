<script setup></script>
<template>
	<footer class="bg-[#1D1D1D] text-white flex flex-col">
		<div
			class="page-layout text-[18px] flex flex-col md:flex-row items-center justify-between md:items-start py-6 space-y-8 md:space-y-0"
		>
			<div class="max-w-full">
				<div class="mb-1 flex flex-col space-y-1 items-center md:items-start">
					<p class="font-bold">IT Group</p>
					<p>C. Salvador de Madariaga, 1</p>
					<p>28027 Madrid</p>
					<p>Spain</p>
				</div>
			</div>

			<div class="flex items-center justify-center space-x-12 md:space-x-4">
				<div class="font-medium">Follow Us On</div>
				<div class="flex flex-row items-center justify-between space-x-4">
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
		</div>

		<div class="border-t-[0.5px] border-slate-400 text-[#B7B7B7] text-[16px]">
			<div
				class="page-layout flex flex-col gap-y-4 py-6 text-center lg:flex-row lg:justify-between lg:text-left"
			>
				<div class="">Copyright © 2022 IT Hote ls. All rights reserved.</div>
				<div class="">
					Photos by Felix Mooneeram & 

					<router-link class="underline hover:opacity-80" to="/"
						>Serge Kutuzov</router-link
					>
					on
					<router-link class="underline hover:opacity-80" to="/"
						>Unsplash</router-link
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<style></style>
