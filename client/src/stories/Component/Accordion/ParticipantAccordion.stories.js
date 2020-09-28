import React from "react";
import ParticipantAccordion from "./ParticipantAccordion";

export default {
  title: "Components/Accordions/ParticipantAccordion",
  component: ParticipantAccordion,
};

const Template = (args) => <ParticipantAccordion {...args} />;

export const Participant = Template.bind({});
Participant.args = {
  lastName: "Mustermann",
  firstName: "Max",
  birth: "20.05.1966",
  mobile: "0175/32478596",
  mail: "max@mustermann.de",
};
