import { pxToRem } from "../lib/functions";

const theme = {
	colors: {
		primary: "#E42321",
		secondary: "#038DAF",
		blue: "#183271",
		blueLigth: "#E0EAEC",
		blueLighter: "#e6f4f7",
		blueDark: "#0c6692",
		blueDarker: "#038daf",
		greyLight: "#555555",
		greyLighter: "#f3f3f3",
		grey: "#333333",
		greyDark: "#222222",
		red: "#cb1625",
		green: "#67B31b",
		white: "#ffffff",
		black: "#000000",
	},
	fonts: {
		regular: "'Barlow', sans-serif",
	},
	spacer: {
		single: pxToRem(10),
		double: pxToRem(20),
		triple: pxToRem(30),
		quadruple: pxToRem(40),
		quintuple: pxToRem(50),
		sextuple: pxToRem(60),
		septuple: pxToRem(70),
		octuple: pxToRem(80),
		nonuple: pxToRem(90),
		decuple: pxToRem(100),
	},
	boxShadows: {
		default: "0 0 .5rem .5rem rgba(0,0,0,0.1)",
	},
	icons: {
		arrow: "\\e902",
	},
};

export { theme as default };
