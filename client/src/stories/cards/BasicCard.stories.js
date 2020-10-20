import React from "react";
import BasicCard from "../../component/Card/index";

export default {
  title: "Components/Cards/Categories",
  component: BasicCard,
};

const Template = (args) => <BasicCard {...args} />;

export const Participants = Template.bind({});
Participants.args = {
  categorieTitle: "Teilnehmerverwaltung",
  description:
    "Hier können Teilnehmer angelegt, gelöscht und durchsucht werden.",
  buttonTitle: "Zur Teilnehmerverwaltung",
};

export const Courses = Template.bind({});
Courses.args = {
  categorieTitle: "Kursverwaltung",
  description: "Hier können Kurse angelegt, gelöscht und durchsucht werden.",
  buttonTitle: "Zur Kursverwaltung",
};

export const Bills = Template.bind({});
Bills.args = {
  categorieTitle: "Rechnungsverwaltung",
  description:
    "Hier können Rechnungen angelegt, gelöscht und durchsucht werden.",
  buttonTitle: "Zur Rechnungsverwaltung",
};
