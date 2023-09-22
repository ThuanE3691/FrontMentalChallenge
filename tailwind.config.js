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
				Rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				notification: {
					bg: "#f9fafe",
					red: "hsl(1, 90%, 64%)",
					blue: "hsl(219, 85%, 26%)",
					"light-gray-blue-0": "hsl(210, 60%, 98%)",
					"light-gray-blue-1": "hsl(211, 68%, 94%)",
					"light-gray-blue-2": "hsl(205, 33%, 90%)",
					"grayish-blue": "hsl(219, 14%, 63%)",
					"dark-grayish-blue": "hsl(219, 12%, 42%)",
					"dark-blue": "hsl(224, 21%, 14%)",
				},
				"time-dashboard": {
					blue: "hsl(246,80%,60%)",
					"light-red-work": "hsl(15,100%,70%)",
					"soft-blue-play": "hsl(195,74%,62%)",
					"Light-red-study": "hsl(348, 100%, 68%)",
					"Lime-green-exercise": "hsl(145, 58%, 55%)",
					"Violet-social": "hsl(264, 64%, 52%)",
					"Soft-orange-self-care": "hsl(43, 84%, 65%)",
					"Very-dark-blue": "hsl(226, 43%, 10%)",
					"dark-blue": "hsl(235, 46%, 20%)",
					"desaturated-blue": " hsl(235, 45%, 61%)",
					"pale-blue": "hsl(236, 100%, 87%)",
					"hover-report-card": "hsl(236, 41%, 34%)",
				},
				"comments-page": {
					"Moderate-blue": "hsl(238, 40%, 52%)",
					"Soft-Red": "hsl(358, 79%, 66%)",
					"Light-grayish-blue": "hsl(239, 57%, 85%)",
					"Pale-red": "hsl(357, 100%, 86%)",
					"Dark-blue": "hsl(212, 24%, 26%)",
					"Grayish Blue": "hsl(211, 10%, 45%)",
					"Light gray": "hsl(223, 19%, 93%)",
					"Very light gray": "hsl(228, 33%, 97%)",
				},
			},
		},
	},
	plugins: [],
};
