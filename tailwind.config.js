/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				PlusJakarta: ["Plus Jakarta Sans", "sans-serif"],
			},
			colors: {
				notification: {
					"bg": "#f9fafe",
					"red": "hsl(1, 90%, 64%)",
					"blue": "hsl(219, 85%, 26%)",
					"light-gray-blue-0": "hsl(210, 60%, 98%)",
					"light-gray-blue-1": "hsl(211, 68%, 94%)",
					"light-gray-blue-2": "hsl(205, 33%, 90%)",
					"grayish-blue": "hsl(219, 14%, 63%)",
					"dark-grayish-blue": "hsl(219, 12%, 42%)",
					"dark-blue": "hsl(224, 21%, 14%)"
				}
				
			},
		},
	},
	plugins: [],
};
