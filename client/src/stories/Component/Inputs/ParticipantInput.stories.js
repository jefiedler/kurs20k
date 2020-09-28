import React from "react";
import ParticipantInput from "./ParticipantInput";

export default {
  title: "Components/Inputs/InputFields",
  component: ParticipantInput,
};

const Template = (args) => <ParticipantInput {...args} />;

export const EditParticipant = Template.bind({});
EditParticipant.args = {};
