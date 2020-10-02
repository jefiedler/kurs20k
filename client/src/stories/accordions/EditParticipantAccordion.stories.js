import React from "react";
import EditParticipantAccordion from "../../component/Accordion/EditParticipant/index";

export default {
  title: "Components/Accordions/ParticipantAccordion",
  component: EditParticipantAccordion,
};

const Template = (args) => <EditParticipantAccordion {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  lastName: "Mustermann",
  firstName: "Max",
  birth: "20.05.1966",
  mobile: "0175/32478596",
  mail: "max@mustermann.de",
};
