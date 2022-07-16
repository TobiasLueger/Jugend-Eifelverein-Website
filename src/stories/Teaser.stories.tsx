import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Teaser from "../components/Teaser/Teaser";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Side/Teaser",
	component: Teaser,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Teaser>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Teaser> = () => <Teaser />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
