module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: ['"Lato"', "sans-serif"],
			},
			animation: {
				bounceCenter: "bounceCenter 1s linear infinite",
			},
			keyframes: {
				bounceCenter: {
					"0%, 100%": {
						transform: "translate(-50%, -15%)",
					},
					"50%": { transform: "translate(-50%, 0)" },
				},
			},
		},
	},
	plugins: [],
};
