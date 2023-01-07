module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", "sans-serif"],
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
			colors: {
				white: "#ffffff",
				black: "#000000",
				greyDark: "#1f2937",
				red: "#e1102d",
				orange: "#e17a10",
				blueMidnight: "#133a4a",
				blueDark: "#0d2833",
				greyLight: "#f1f5f9",
				greyLoading: "#c8cdd1",
				greenDefault: "#15803d",
				greenDark: "#105157",
				greenLight: "#67b31b",
			},
		},
	},
	plugins: [],
};
