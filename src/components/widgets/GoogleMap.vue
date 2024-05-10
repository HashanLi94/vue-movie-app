<script setup>
	import { GoogleMap, Marker } from "vue3-google-map";

	const center = { lat: 40.689247, lng: -74.044502 };
</script>

<template>
	<GoogleMap
		api-key="AIzaSyCS9wZHrhkzPKuBQH0jVNoLgvB5y5RoZVI"
		style="width: 100%; height: 500px"
		:center="center"
		:zoom="15"
	>
		<Marker :options="{ position: center }" />
	</GoogleMap>
</template>

<style>
	body {
		margin: 0;
	}
</style>
