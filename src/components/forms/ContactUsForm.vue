<script setup>
	import { reactive, computed } from "vue";
	import { useVuelidate } from "@vuelidate/core";
	import { required, email, helpers } from "@vuelidate/validators";

	const form = reactive({
		firstName: "",
		lastName: "",
		email: "",
		telephone: "",
		message: "",
		acceptTerms: false,
	});

	// validate the phone number
	const validPhoneNumber = helpers.regex(
		/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/
	);

	const rules = computed(() => {
		return {
			firstName: {
				required: helpers.withMessage("First Name is Required", required),
			},
			lastName: {
				required: helpers.withMessage("Last Name is Required", required),
			},
			email: {
				required: helpers.withMessage("Email is Required", required),
				email: helpers.withMessage("Invalid Email address", email),
			},
			message: {
				required: helpers.withMessage("Message is Required", required),
			},
			telephone: {
				required: helpers.withMessage("Telephone number is Required", required),
				validPhoneNumber: helpers.withMessage(
					"Invalid Phone Number",
					validPhoneNumber
				),
			},
			acceptTerms: {
				required: helpers.withMessage("User should accept the terms", (value) =>
					value ? true : false
				),
			},
		};
	});

	const v$ = useVuelidate(rules, form);

	// handle form submission
	async function handleSubmit() {
		// Validate the form fields
		const result = await v$.value.$validate();
		if (!result) return;

		// TODO: If the form is valid, perform some action with the form data
		console.log(form);
	}
</script>
<template>
	<div class="form-contact-us-form">
		<form
			@submit.prevent="handleSubmit"
			class="relative space-y-3 max-w-screen-md mx-auto rounded-md pt-12 shadow-xl lg:pt-10 text-white"
		>
			<div class="grid gap-3 md:grid-cols-2">
				<div>
					<label class="text-[#b7b7b7] text-lg"> First Name * </label>
					<input
						class="mt-2 h-12 w-full rounded-md bg-[#3C3C3C] px-3"
						:class="{
							'border border-red-500 focus:border-red-500': v$.firstName.$error,
							'border border-[#42d392] ': !v$.firstName.$invalid,
						}"
						v-model="v$.firstName.$model"
						@input="v$.firstName.$touch"
						@blur="v$.firstName.$touch"
					/>
					<p
						class="text-red-500 text-sm font-[400] ml-2 mt-1"
						v-for="error of v$.firstName.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>

				<div>
					<label class="text-[#b7b7b7] text-lg"> Last Name * </label>
					<input
						class="mt-2 h-12 w-full rounded-md bg-[#3C3C3C] px-3"
						:class="{
							'border border-red-500 focus:border-red-500': v$.lastName.$error,
							'border border-[#42d392] ': !v$.lastName.$invalid,
						}"
						v-model="v$.lastName.$model"
						@input="v$.lastName.$touch"
						@blur="v$.lastName.$touch"
					/>
					<p
						class="text-red-500 text-sm font-[400] ml-2 mt-1"
						v-for="error of v$.lastName.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</p>
				</div>
			</div>

			<div>
				<label class="text-[#b7b7b7] text-lg"> Email * </label>
				<input
					type="email"
					class="mt-2 h-12 w-full rounded-md bg-[#3C3C3C] px-3"
					:class="{
						'border border-red-500 focus:border-red-500': v$.email.$error,
						'border border-[#42d392] ': !v$.email.$invalid,
					}"
					v-model="v$.email.$model"
					@input="v$.email.$touch"
					@blur="v$.email.$touch"
				/>
				<p
					class="text-red-500 text-sm font-[400] ml-2 mt-1"
					v-for="error of v$.email.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</div>

			<div>
				<label class="text-[#b7b7b7] text-lg"> Telephone </label>

				<input
					class="mt-2 h-12 w-full rounded-md bg-[#3C3C3C] px-3"
					:class="{
						'border border-red-500 focus:border-red-500': v$.telephone.$error,
						'border border-[#42d392] ': !v$.telephone.$invalid,
					}"
					v-model="v$.telephone.$model"
					@input="v$.telephone.$touch"
					@blur="v$.telephone.$touch"
				/>
				<p
					class="text-red-500 text-sm font-[400] ml-2 mt-1"
					v-for="error of v$.telephone.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</div>

			<div>
				<label class="text-[#b7b7b7] text-lg"> Message</label>
				<textarea
					type="text"
					rows="6"
					class="mt-2 w-full rounded-md bg-[#3C3C3C] px-3 resize-y"
					:class="{
						'border border-red-500 focus:border-red-500': v$.message.$error,
						'border border-[#42d392] ': !v$.message.$invalid,
					}"
					v-model="v$.message.$model"
					@input="v$.message.$touch"
					@blur="v$.message.$touch"
				/>
				<p
					class="text-red-500 text-sm font-[400] ml-2 mt-1"
					v-for="error of v$.message.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</div>

			<div>
				<p class="text-lg text-[#b7b7b7]">* Required Fields</p>
			</div>

			<div class="checkbox flex flex-col space-y-2">
				<div class="flex flex-row space-x-4 items-center justify-start">
					<input
						type="checkbox"
						v-model="v$.acceptTerms.$model"
						class="w-4 h-4 bg-gray-100 checked:bg-white border-[]"
						@change="v$.acceptTerms.$touch"
						@blur="v$.acceptTerms.$touch"
					/>
					<label for="checkbox1" class="text-[16px] md:text-[20px]"
						>I agree to the
						<router-link
							to="/"
							target="_blank"
							class="text-white hover:opacity-80"
						>
							Terms and Conditions
						</router-link>
					</label>
				</div>

				<p
					class="text-red-500 text-sm font-[400] ml-2"
					v-for="error of v$.acceptTerms.$errors"
					:key="error.$uid"
				>
					{{ error.$message }}
				</p>
			</div>

			<div class="flex items-end justify-end">
				<button
					type="submit"
					class="font-inter mt-5 rounded-sm bg-[#cc9601] py-4 px-16 text-center font-[500] text-white text-[16px]"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<style></style>
