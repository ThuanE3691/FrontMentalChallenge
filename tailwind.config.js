/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
