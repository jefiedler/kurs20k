import React from "react";
import ShowParticipant from "./ShowParticipant";

export default {
  title: "Components/Accordions/ParticipantAccordion/Show",
  component: ShowParticipant,
};

const Template = (args) => <ShowParticipant {...args} />;

export const Show = Template.bind({});
Show.args = {
  lastName: "Mustermann",
  firstName: "Max",
  birth: "20.05.1966",
  mobile: "0175/32478596",
  mail: "max@mustermann.de",
};
