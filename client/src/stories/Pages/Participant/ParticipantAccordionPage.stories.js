import React from "react";
import ParticipantAccordionPage from "./ParticipantAccordionPage";

export default {
  title: "Pages/Participant/EditParticipants",
  component: ParticipantAccordionPage,
};

const Template = (args) => <ParticipantAccordionPage {...args} />;

export const EditParticipant = Template.bind({});
EditParticipant.args = {};
