module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#d0d8db",
					200: "#a1b0b7",
					300: "#718992",
					400: "#42616e",
					500: "#133a4a",
					600: "#0f2e3b",
					700: "#0b232c",
					800: "#08171e",
					900: "#040c0f",
				},
			},
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
