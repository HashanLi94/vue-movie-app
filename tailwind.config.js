/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open-sans", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				din: ["DIN", "sans-serif"],
				dinBold: ["DIN-Bold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
