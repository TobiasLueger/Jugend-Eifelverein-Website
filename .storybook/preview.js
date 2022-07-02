import "../src/styles/tailwind.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { Routes, Route } from "react-router-dom";

/* addDecorator(StoryRouter()); */

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
