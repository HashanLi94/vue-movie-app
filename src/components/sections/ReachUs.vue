<script setup>
	import { ref } from "vue";
</script>
<template>
	<section
		ref="movies_collection_section"
		class="w-full min-h-screen bg-[#000000] text-white"
	>
		<div class="section-wrapper flex flex-col px-2 py-8 md:mx-12">
			<div class="section-header flex flex-col space-y-2">
				<h2 class="text-xl lg:text-3xl font-bold">How To Reach Us</h2>
				<p class="text-md lg:text-xl font-medium text-[#B7B7B7]">
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div class="section-body flex flex-col md:flex-row">
				<div class="left-side">
					<form
						class="relative space-y-3 max-w-screen-md mx-auto rounded-md py-6 shadow-xl lg:py-10 text-white"
					>
						<div class="grid gap-3 md:grid-cols-2">
							<div>
								<label class=""> First Name </label>
								<input
									type="text"
									placeholder="Your Name"
									class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
								/>
							</div>
							<div>
								<label class=""> Last Name </label>
								<input
									type="text"
									placeholder="Last  Name"
									class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
								/>
							</div>
						</div>

						<div>
							<label class=""> Email Address </label>
							<input
								type="email"
								placeholder="Info@example.com"
								class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
							/>
						</div>

						<div>
							<label class="">
								Phone: <span class="text-sm text-gray-400">(optional)</span>
							</label>
							<input
								type="text"
								placeholder="+543 5445 0543"
								class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
							/>
						</div>

						<div>
							<label class=""> Message </label>
							<textarea
								type="text"
								class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
							/>
						</div>

						<div class="checkbox">
							<input type="checkbox" id="chekcbox1" checked="" />
							<label for="checkbox1"
								>I agree to the
								<a href="#" target="_blank" class="text-blue-600">
									Terms and Conditions
								</a>
							</label>
						</div>

						<div>
							<button
								type="button"
								class="mt-5 w-full rounded-md bg-[#cc9601] py-4 px-2 text-center font-semibold text-white"
							>
								Get Started
							</button>
						</div>
					</form>
				</div>
				<div class="right-side"></div>
			</div>
		</div>
	</section>
</template>

<style></style>
