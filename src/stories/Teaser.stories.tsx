import React from "react";
import { ComponentStory, ComponentMeta, DecoratorFn } from "@storybook/react";

import Teaser from "../components/Teaser/Teaser";

export default {
	title: "Components/Teaser",
	component: Teaser,
} as ComponentMeta<typeof Teaser>;

const Template: ComponentStory<typeof Teaser> = (args) => (
	<div className="md:max-w-[410px] max-w-full">
		<Teaser {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	title: "Veranstalrung",
	content: "<p>Test String</p>",
	data: {
		fur_wen: "Kinder und Jugendliche",
		startdatum: "24 Juli, 2022",
		startzeit: "12:00",
		enddatum: "25 Juli, 2022",
		endzeit: "6:00",
		voraussetzung: "keine Voraussetzung",
		enthaltene_leistungen: "keine Leistung",
		mitbringen: "kein Mitbringen",
		kosten: "keine Kosten",
		treffpunkt: "Prümmerwall",
		ort: "Rheinbach",
		leitung: "Stefan Lüger",
		anmeldung: "news-eifeljugend@web.de",
		bild: "https://jugend.eifel-53359.de/api/wp-content/uploads/2022/07/20220321084624_Veranstaltungsmotiv_Raketen-WS_2022-1.jpg",
		ausgebucht: true,
		startseite: true,
		freie_plaetze: "",
	},
	id: 2,
};
