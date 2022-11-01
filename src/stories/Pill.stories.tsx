import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pill from "../components/Pill/Pill";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Elements/Pill",
	component: Pill,
	parameters: {
		backgrounds: {
			default: "dark",
		},
	},
} as ComponentMeta<typeof Pill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const BookedUp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BookedUp.args = {
	bookedUp: true,
};

export const FreePlaces = Template.bind({});
FreePlaces.args = {
	freePlaces: 14,
};
