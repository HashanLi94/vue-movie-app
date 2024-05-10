import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router/index";

// Added axios to consume http requests
import axios from "axios";
import VueAxios from "vue-axios";

// aOS animation Library
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router); // Access router
app.use(VueAxios, axios); // Access the axios globally
app.use(AOS); // Access the AOS globally

app.mount("#app");
