<script setup></script>
<template>
	<header class="sticky top-0 shadow bg-black text-white font-inter">
		<div
			class="page-layout sticky top-0 flex flex-col overflow-hidden py-6 md:flex-row md:items-center md:justify-between"
		>
			<router-link
				to="/"
				class="flex items-center whitespace-nowrap text-2xl font-black"
			>
				<img
					src="../../assets/imgs/logo.png"
					alt="brand-logo"
					class="mr-2 w-10 h-10"
				/>

				<span class="">Logoipsum</span>
			</router-link>
			<input type="checkbox" class="peer hidden" id="navbar-open" />
			<label
				class="absolute top-5 right-7 cursor-pointer md:hidden"
				for="navbar-open"
			>
				<span class="sr-only">Toggle Navigation</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</label>
			<nav
				aria-label="Header Navigation"
				class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
			>
				<ul
					class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 text-[16px] md:text-[14px] lg:text-[16px]"
				>
					<li class="md:mr-8 lg:mr-10 hover:opacity-80 uppercase cursor-pointer">
						<router-link to="/">Home</router-link>
					</li>
					<li class="md:mr-8 lg:mr-10 hover:opacity-80 uppercase cursor-pointer">
						<router-link to="/">Our Screens</router-link>
					</li>
					<li class="md:mr-8 lg:mr-10 hover:opacity-80 uppercase cursor-pointer">
						<router-link to="/">Schedule</router-link>
					</li>
					<li class="md:mr-8 lg:mr-10 hover:opacity-80 uppercase cursor-pointer">
						<router-link to="/">Movie Library</router-link>
					</li>
					<li
						class="md:mr-8 lg:mr-10 hover:opacity-80 uppercase cursor-pointer block md:hidden lg:block"
					>
						<router-link to="/">Location & Contact</router-link>
					</li>
					<li class="hover:opacity-80 hidden md:block">
						<button class="px-2 py-1 font-medium transition-color">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style></style>
