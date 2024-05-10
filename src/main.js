import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router/index";

// Added axios to consume http requests
import axios from "axios";
import VueAxios from "vue-axios";

// Google Maps
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app.use(router); // Access router
app.use(VueAxios, axios); // Access the axios globally
app.use(VueGoogleMaps, {
	load: {
		key: "",
		// language: 'de',
	},
}); // Access the vue google maps service globally
app.mount("#app");
